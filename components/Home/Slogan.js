import {useTranslation} from "next-i18next";


function Slogan() {
    const { t } = useTranslation('common');
    return (
        <div className="w-full h-full py-10 sm:py-10 flex flex-col justify-center font-heads font-medium m-auto bg-bgr text-center mt-5 md:mt-28 pb-10">
            <h1 className=" max-w-6xl  w-auto m-auto text-xl text-left mt-10 px-6 mb-10"><span className="uppercase text-center text-2xl md:text-5xl text-bg2 font-semibold">{t('slogan2')}</span></h1>
            <p className=" max-w-6xl m-auto text-left  px-6 pb-16 font-normal ">{t('slogan')}</p>
        </div>
    )
}

export default Slogan
