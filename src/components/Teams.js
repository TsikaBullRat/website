import profile from '../assets/profile.png';
import { Headline } from './Pieces/Headline';
import Loader from 'react-spinners/HashLoader';
import React, { useState, useEffect } from 'react';

export const Teams = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    },
        []
    );
    return (
        <>
            {
                loading ? (
                    <div className="text-center" style={{ marginTop: 300 }}><Loader size={300} color={"#fa8701"} loading={loading} /></div>
                ) : (
                    <>
                        <Headline headline="Our Team" />
                        <p className="text-center">We operate a non-profit multipurpose facility governed by an active 4 member volunteer board of directors.</p>

                        <div className="row justify-content-center">
                            <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                                <img src={profile} style={{ width: 250, height: 250 }} />
                                <div className="card-body">
                                    <h4>Ms Mpho Matthews</h4>
                                    <h6>Founder</h6>
                                    <h6>Contact Number: 071 801 9052</h6>
                                </div>
                            </div>
                            <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                                <img src={profile} style={{ width: 250, height: 250 }} />
                                <div className="card-body">
                                    <h4>Mrs Gadibolaye Koloi</h4>
                                    <h6>Chairperson</h6>
                                    <h6>Contact Number: 078 851 0463</h6>
                                </div>
                            </div>
                            <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                                <img src={profile} style={{ width: 250, height: 250 }} />
                                <div className="card-body">
                                    <h4>Mr Steven Jantjies</h4>
                                    <h6>Vice Chair</h6>
                                    <h6>Contact Number: 071 812 4176</h6>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
        </>
    )
}