import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const ApiContext = createContext();

export const useApi = () => {
    return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [gold, setGold] = useState(null);
    const [jobs, setJobs] = useState(null);
    const [frm, setFrm] = useState(null);
    const [wrm, setWrm] = useState(null);
    const [hrm, setHrm] = useState(null);
    const [arm, setArm] = useState(null);
    const [weaponQ7, setWeaponQ7] = useState(null);
    const [foodQ5, setFoodQ5] = useState(null);

    const baseUrl = "https://api.allorigins.win/raw?url=";
    const goldApi = "https://service.erepublik.tools/api/v1/market/gold";
    const jobsApi = "https://service.erepublik.tools/api/v1/market/job/0";

    const frmApi = "https://service.erepublik.tools/api/v1/market/item/0/7/1";
    const wrmApi = "https://service.erepublik.tools/api/v1/market/item/0/12/1";
    const hrmApi = "https://service.erepublik.tools/api/v1/market/item/0/17/1";
    const armApi = "https://service.erepublik.tools/api/v1/market/item/0/24/1";
    const weaponQ7Api = "https://service.erepublik.tools/api/v1/market/item/0/2/7";
    const foodQ5Api = "https://service.erepublik.tools/api/v1/market/item/0/1/5";

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

            setter(dataWithIndustry);
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

                await productsData(frmApi, setFrm);
                await productsData(wrmApi, setWrm);
                await productsData(hrmApi, setHrm);
                await productsData(armApi, setArm);
                await productsData(weaponQ7Api, setWeaponQ7);
                await productsData(foodQ5Api, setFoodQ5);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <ApiContext.Provider
            value={{ loading, gold, jobs, frm, wrm, hrm, arm, weaponQ7, foodQ5, slice }}>
            {children}
        </ApiContext.Provider>
    );
};
