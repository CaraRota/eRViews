import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { productsAPIs } from "../utils/dataMapping";

const ApiContext = createContext();

export const useApi = () => {
    return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [gold, setGold] = useState(null);
    const [jobs, setJobs] = useState(null);
    const [pricesData, setPricesData] = useState([]);

    const baseUrl = "https://api.allorigins.win/raw?url=";
    const goldApi = "https://service.erepublik.tools/api/v1/market/gold";
    const jobsApi = "https://service.erepublik.tools/api/v1/market/job/0";

    const slice = 5;

    const productsData = async (url, setter) => {
        try {
            const response = await axios.get(baseUrl + url);
            const slicedData = response.data.offers.slice(0, slice);
            const industry = response.data.info.industry.name;
            const id = response.data.info.industry.id;
            const dataWithIndustry = {
                id,
                industry,
                offers: slicedData,
            };

            setter((prev) => [...prev, dataWithIndustry]);
        } catch (error) {
            console.error(`Error fetching data of: ${url}`, error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const goldResponse = await axios.get(`${baseUrl + goldApi}`);
                setGold(goldResponse.data.offers[0]);

                const jobsResponse = await axios.get(`${baseUrl + jobsApi}`);
                setJobs(jobsResponse.data.offers[0]);

                productsAPIs.map(async (url) => {
                    await productsData(url, setPricesData);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <ApiContext.Provider value={{ loading, gold, jobs, pricesData, slice }}>
            {children}
        </ApiContext.Provider>
    );
};
