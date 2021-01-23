import React, { useState, useEffect } from 'react';

function Card() {
    return (
        <div className='container'>
            <img className='image' src={require("../images/main/skills.png")} alt="skills1" />

            <div style={{ fontSize: '40px', fontWeight: 'bold', margin: '0 0 0 30px' }}>E-Commerce Web App</div>

            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%', margin: '0 10px 20px 30px' }}>
                    fd f fdkhf fh fkdfh sfh fsdf fh dhf  dhfsd dh dhffd df <br /> fdkfjdhsfdfdjfsf fdjsfh
                </div>
                <div style={{ margin: 'auto' }}>
                    <h4>fdfhdsf</h4>
                </div>
            </div>

            <style jsx>{`
                .container{
                    width: 45%;
                    background: white;
                    margin: 20px auto;
                    border: 1px solid #43436b;
                    border-radius: 10px;
                }

                .image{
                    border-radius: 10px;
                    width: 100%;
                }
             `}</style>
        </div>
    )
}

export default Card
