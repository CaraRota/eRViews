import React from "react";

import Slider from "react-slick";
import VipbarDetail from "./VipbarDetail";

const Vipbar = ({ gold, frm, wrm, hrm, arm }) => {
    const carouselSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        className: "center",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='text-center truncate text-slate-700 text-2xl font-bold'>
                Vip Shop Prices
            </div>
            <div className='mx-auto max-w-screen-lg'>
                <Slider {...carouselSettings}>
                    <VipbarDetail
                        image={"https://www.erepublik.com/images/icons/boosters/128px/speed.png"}
                        alt={"2x Damage Accelerator Icon"}
                        text={"2x Damage Accelerators"}
                        data={gold}
                        amount={0.7}
                        gold={true}
                    />
                    <VipbarDetail
                        image={"https://www.erepublik.com/images/icons/boosters/128px/damage.png"}
                        alt={"Ground Damage Icon"}
                        text={"+50% Ground Damage"}
                        data={frm}
                        amount={77}
                    />
                    <VipbarDetail
                        image={"https://www.erepublik.com/images/icons/rewards/128px/storage.png"}
                        alt={"Storage Icon"}
                        text={"+1000 Storage"}
                        data={frm}
                        amount={227}
                    />
                    <VipbarDetail
                        image={"https://www.erepublik.com/images/icons/industry/1/q10_128x128.png"}
                        alt={"Simple Energy Bar Icon"}
                        text={"Simple Energy Bar"}
                        data={gold}
                        gold={true}
                        amount={1.4}
                    />
                    <VipbarDetail
                        image={"https://www.erepublik.com/images/icons/boosters/128px/catchup.png"}
                        alt={"Ghost Booster Icon"}
                        text={"Ghost Booster"}
                        data={wrm}
                        amount={56}
                    />
                    <VipbarDetail
                        image={"https://www.erepublik.com/images/icons/industry/1/q11_128x128.png"}
                        alt={"Double Energy Bar Icon"}
                        text={"Double Energy Bar"}
                        data={gold}
                        gold={true}
                        amount={3}
                    />
                    <VipbarDetail
                        image={
                            "https://www.erepublik.com/images/icons/rewards/128px/factory_reset_token.png"
                        }
                        alt={"Factory Reset Token Icon"}
                        text={"Factory Reset Token"}
                        data={hrm}
                        amount={5}
                    />
                    <VipbarDetail
                        image={
                            "https://www.erepublik.com/images/icons/boosters/128px/deploy_size.png"
                        }
                        alt={"+100% Deploy Size Icon"}
                        text={"+100% Deploy Size"}
                        data={frm}
                        amount={129}
                    />
                    <VipbarDetail
                        image={
                            "https://www.erepublik.com/images/icons/boosters/128px/deploy_rank_ground.png"
                        }
                        alt={"+10% Ground Rank Points Icon"}
                        text={"+10% Ground Rank Points"}
                        data={wrm}
                        amount={142}
                    />
                    <VipbarDetail
                        image={"https://www.erepublik.com/images/icons/rewards/128px/storage.png"}
                        alt={"+9000 Storage Icon"}
                        text={"+9000 Storage"}
                        data={wrm}
                        amount={262}
                    />
                    <VipbarDetail
                        image={
                            "https://www.erepublik.com/images/icons/boosters/128px/air_damage.png"
                        }
                        alt={"+20% Air Damage Icon"}
                        text={"+20% Air Damage"}
                        data={arm}
                        amount={4}
                    />
                    <VipbarDetail
                        image={"https://www.erepublik.com/images/icons/boosters/128px/damage.png"}
                        alt={"+100% Ground Damage Icon"}
                        text={"+100% Ground Damage"}
                        data={wrm}
                        amount={172}
                    />
                    <VipbarDetail
                        image={
                            "https://www.erepublik.com/images/icons/boosters/128px/deploy_rank_air.png"
                        }
                        alt={"+10% Air Rank Points Icon"}
                        text={"+10% Air Rank Points"}
                        data={arm}
                        amount={9}
                    />
                    <VipbarDetail
                        image={"https://www.erepublik.com/images/icons/boosters/128px/speed.png"}
                        alt={"5x Damage Accelerators Icon"}
                        text={"5x Damage Accelerators"}
                        data={true}
                        cc={4486}
                    />
                    <VipbarDetail
                        image={
                            "https://www.erepublik.com/images/icons/boosters/128px/deploy_rank_ground.png"
                        }
                        alt={"+20% Ground Rank Points Icon"}
                        text={"+20% Ground Rank Points"}
                        data={wrm}
                        amount={337}
                    />
                    <VipbarDetail
                        image={
                            "https://www.erepublik.com/images/icons/boosters/128px/air_damage.png"
                        }
                        alt={"+50% Air Damage Icon"}
                        text={"+50% Air Damage"}
                        data={arm}
                        amount={10}
                    />
                </Slider>
            </div>
        </>
    );
};

export default Vipbar;
