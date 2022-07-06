import React,{useref} from 'react'
import { useTranslation } from "next-i18next";
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useRouter} from 'next/router'


export default function FormIgp() {

    const { t } = useTranslation('common');
    const router = useRouter();
    const { register, handleSubmit, formState: {errors}, reset } = useForm();

    async function onSubmitForm(values) {
        let config = {
            method:'POST',
            url:"/api/services",
            headers: {
                'Content-Type': 'application/json'
            },
            data:values,
        }
        let config2 = {
            method:'POST',
            url:"/api/igpform.js",
            headers: {
                'Content-Type': 'application/json'
            },
            data:values,
        }

        router.push('/emailsended');
        try {
            const response = await axios(config);
            const response2 = await axios(config2);
            if(response.status == 200 && response2.status == 200){
                reset();
            }
        } catch (err) {
            console.log(err);
            
        }
    }

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmitForm)} className="max-w-3xl m-auto">
    <h2 className="pb-5 font-semibold text-bg2">{t("form_data")}</h2>
    <div className="relative z-0 mb-6 w-full group">
        <input 
            type="email" 
            name="email_direction" 
            {...register('email_direction', { 
                required: true,
                required: true,
                minLength:8,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
                message: 'Escribe un correo no menor a 8 caracteres y valido.'
                
            })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10"
            placeholder=" "
            required 
        />
        <label 
            htmlFor="email_direction" 
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
            {t("email")}
        </label>
        {errors.email_direction && 'Escribe un correo no menor a 8 caracteres y valido.'}
    </div>
    
    
    <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
            <input 
                type="text" 
                name="name" 
                {...register('name', { 
                    required: true,
                    maxLength: 40,
                    message: 'Escribe no más de 11 caracteres'
                    })}
                id="name" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" 
                placeholder=" " 
                required 
            />
            <label 
                htmlFor="name" 
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {t("nombres")}
            </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
            <input 
                type="text" 
                name="last_name"
                {...register('last_name', { required: true })}
                id="last_name" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" 
                placeholder=" " 
                required 
            />
            <label 
                htmlhtmlfor="last_name" 
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {t("apellidos")}
            </label>
        </div>
    </div>
    <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
            <input 
                type="text" 
                name="pais" 
                {...register('pais', { 
                    required: true,
                    maxLength: 40,
                    message: 'Escribe no más de 11 caracteres'
                    })}
                id="pais" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" 
                placeholder=" " 
                required 
            />
            <label 
                htmlFor="pais" 
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {t("pais")}
            </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
            <input 
                type="text" 
                name="pasaporte"
                {...register('pasaporte', { required: true })}
                id="pasaporte" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" 
                placeholder=" " 
                required 
            />
            <label 
                htmlhtmlfor="pasaporte" 
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {t("pasaporte")}
            </label>
        </div>
    </div>
    <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
            <input 
                type="text" 
                name="facturacion" 
                {...register('facturacion', { 
                    required: true,
                    message: 'Escribe no más de 11 caracteres'
                    })}
                id="facturacion" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" 
                placeholder=" " 
                required 
            />
            <label 
                htmlFor="facturacion" 
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {t("direccion_fac")}
            </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
            <input 
                type="tel" 
                name="phone" 
                {...register('phone', { required: true })}
                id="phone" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" 
                placeholder=" " 
                required 
            />
            <label 
                htmlFor="floating_phone" 
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {t("telefono")}
            </label>
        </div>
        
    </div>
    <div className="grid xl:grid-cols-2 xl:gap-6">
        
        <div className="relative z-0 mb-6 w-full group">
            <input 
                type="text" 
                name="calle_numero"
                {...register('calle_numero', { required: true })}
                id="calle_numero" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" 
                placeholder=" " 
                required 
            />
            <label 
                htmlhtmlfor="calle_numero" 
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {t("calleynumero")}
            </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
            <input 
                type="text" 
                name="postal"
                {...register('postal', { required: true })}
                id="postal" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" 
                placeholder=" " 
                required 
            />
            <label 
                htmlhtmlfor="postal" 
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {t("codigo")}
            </label>
        </div>
    </div>
    
    <h2 className="pb-5 font-semibold text-bg2">{t("form_data2")}</h2>
    
    
    <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
            <input 
                type="text" 
                name="municipio" 
                {...register('municipio', { 
                    required: true,
                    maxLength: 40,
                    message: 'Escribe no más de 11 caracteres'
                    })}
                id="Municipio" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" 
                placeholder=" " 
                required 
            />
            <label 
                htmlFor="municipio" 
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {t("municipio")}
            </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
                <select 
                    name="step_process"
                    {...register('step_process', { required: true })}
                    id="floating_last_name" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10"
                    placeholder=" " 
                    required
                >
                    <option selected disabled>{t("form_data3")}</option>
                    <option>{t("stepform3b")} {t("stepform3b2")}</option>
                    <option>{t("stepform3c")} {t("stepform3c2")}</option>
                    <option>{t("stepform1b1b")} {t("stepform3ba")}</option>

                </select>
                <label 
                    htmlhtmlfor="floating_last_name" 
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    
                </label>
            </div>
    </div>

    <button 
        className="m-auto  bg-bg2 text-bgr w-48 py-2 flex items-center justify-center mt-10 hover:bg-sl transition-all duration-150 relative z-10 "
        type="submit"
    >
        Enviar
        <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
        </svg>
    </button>
</form>
    
  )
}
