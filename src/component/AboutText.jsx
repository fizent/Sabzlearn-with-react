import { Fragment } from "react";

export default function AboutText({topic, description}) {
    return(
        <Fragment>
            <div>
                <h3 className="font-fontVazir py-3 text-xl">{topic}</h3>
                <p className="font-fontVazir text-gray-500">{description}</p>
            </div>
        </Fragment>
    )
}