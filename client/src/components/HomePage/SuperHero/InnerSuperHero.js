import React from 'react';

const InnerSuperHero = (props) => {
    const {header, icon, title, background} = props.elem;
    return (
        <div>
            <div className=''>
                <div className={`flex gap-3 p-3 bg-[${background}] shadow`}>
                    <img src={icon} alt='asdf'></img>
                    <div>
                        <p>{header}</p>
                        <small>{title}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnerSuperHero;