import {useTranslation} from "next-i18next";


function Slogan() {
    const { t } = useTranslation('common');
    return (
        <div className="w-screen h-full py-10 sm:py-10 flex justify-center font-heads font-medium m-auto bg-bgrS">
            <h1 className=" max-w-6xl m-auto text-xl px-6 "><span className="uppercase text-2xl text-sl font-semibold">{t('slogan2')}</span> {t('slogan')}</h1>
        </div>
    )
}

export default Slogan
