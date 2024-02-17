import React from "react";

import VipbarDetail from "./VipbarDetail";

const Vipbar = ({ gold, frm, wrm, hrm, arm }) => {
    return (
        <>
            <div className='flex flex-col mx-auto w-11/12 lg:max-w-screen-lg gap-2 py-5 bg-gradient-to-b from-purple-100 to-purple-200 border-purple-300 mt-5 rounded-md border '>
                <div className='text-center truncate text-purple-400 text-2xl font-bold'>
                    Vip Shop Prices
                </div>
                <div className='flex flex-row flex-wrap gap-2 justify-center items-center'>
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
                </div>
            </div>
        </>
    );
};

export default Vipbar;
