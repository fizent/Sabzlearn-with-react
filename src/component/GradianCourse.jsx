import { Fragment } from "react";

export default function GradientBox({ gradientColors, text, subtitle, img}) {
  return (
    <Fragment>
      <div className="flex flex-col cursor-pointer p-5 h-40 rounded-lg text-white font-bold text-center flex items-center justify-center" style={{ background: `linear-gradient(${gradientColors})` }}>
        <img src={img} alt="" />
        <h3 className="font-fontVazir py-3 text-lg">{text}</h3>
        <p className="font-fontVazir py-3">{subtitle}</p>
      </div>
    </Fragment>
  );
}
