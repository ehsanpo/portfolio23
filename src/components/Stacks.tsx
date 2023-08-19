import React from "react";
import stacks_data from "../../data/stacks-data";

const Stack = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stacks_data.map((Xstack) => {
                    return (
                        <div key={Xstack.slug} >
                            <img alt={Xstack.slug} src={Xstack.icon} />
                            <h3>{Xstack.slug}</h3>
                            <div className="justify-center " >
                                <ul>
                                    {Xstack.labels.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Stack;



