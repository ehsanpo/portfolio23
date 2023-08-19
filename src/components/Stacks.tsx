import React from "react";
import Grid from "@/components/Grid";
import stacks_data from "../../data/stacks-data";

const Stack = () => {
    return (
        <div className="container mx-auto">
            <Grid columns={4}>
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
            </Grid>
        </div>
    );
};

export default Stack;



