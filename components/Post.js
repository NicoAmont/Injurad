import 'animate.css';
import styles from "../styles/Post.module.css"

export default function Post() {
    return (
        <div className="ml-10 col-span-2 overflow-x-hidden">
            <div className="h-20">
                <h1 className="font-normal text-lg uppercase border-l-2 tracking-widest px-3">home</h1>
            </div>

            <div className={styles.post_container}>
                
                    <div className="block w-60 h-56 md:w-72 md:h-64 mr-4 relative hover:scale-105 transition-all duration-150 cursor-pointer animate__animated animate__bounceIn">
                        {/* Image container */}
                        <div className={styles.post_image}>
                            <img className={styles.post_image} src="/image 17.png" alt="" />
                            <div className="w-9 h-9 rounded-full bg-bgr absolute top-0 right-0 md:right-0">
                                <svg className="absolute top-0.5 right-0.5 md:top-0.5 md:right-0.5" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 9L9 15M15 15L9 9L15 15Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex bg-white w-full h-6 p-1 rounded-b-xl">
                            <img className=" scale-50" src="/image 16.png" alt="" />
                            <h1>Inmobiliaria Grupo Bog...</h1>
                        </div>

                        <div className="bg-bd w-28 h-8 flex items-center justify-center text-white absolute right-0 bottom-0 rounded-full">
                            <h1>4.5</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4151 4.82735L8.94385 4.32286L7.39209 1.17696C7.34971 1.09083 7.27998 1.0211 7.19385 0.978716C6.97783 0.872075 6.71533 0.960943 6.60732 1.17696L5.05556 4.32286L1.58428 4.82735C1.48857 4.84102 1.40107 4.88614 1.33408 4.9545C1.25309 5.03774 1.20846 5.14973 1.21 5.26586C1.21154 5.38199 1.25912 5.49276 1.34228 5.57383L3.85381 8.02247L3.26045 11.4801C3.24653 11.5605 3.25543 11.6432 3.28614 11.7189C3.31685 11.7945 3.36813 11.86 3.43417 11.908C3.50022 11.9559 3.57838 11.9845 3.6598 11.9903C3.74122 11.9961 3.82264 11.9789 3.89482 11.9408L6.9997 10.3084L10.1046 11.9408C10.1894 11.9859 10.2878 12.001 10.3821 11.9846C10.62 11.9436 10.78 11.718 10.739 11.4801L10.1456 8.02247L12.6571 5.57383C12.7255 5.50684 12.7706 5.41934 12.7843 5.32364C12.8212 5.08438 12.6544 4.8629 12.4151 4.82735Z" fill="#DEE6FF"/>
                            </svg>
                            <h1 className="ml-2">145</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.637 4.62657C12.3303 3.89448 11.884 3.22906 11.3232 2.6674C10.764 2.10475 10.0997 1.65742 9.36809 1.35079C8.61862 1.03515 7.81335 0.873356 7.00012 0.875013H6.97278C6.14563 0.879114 5.34582 1.04318 4.5925 1.36583C3.86717 1.6756 3.20914 2.12373 2.6552 2.68517C2.09975 3.24557 1.65862 3.90867 1.35637 4.63751C1.04262 5.39543 0.883644 6.20845 0.888793 7.02872C0.892895 7.97755 1.11985 8.91954 1.54368 9.76173V11.8399C1.54368 12.1871 1.82532 12.4688 2.17122 12.4688H4.24661C5.09272 12.8957 6.02642 13.1204 6.97414 13.125H7.00286C7.82043 13.125 8.61204 12.9664 9.35852 12.6561C10.0864 12.3531 10.7482 11.911 11.3068 11.3545C11.87 10.7953 12.313 10.1418 12.6234 9.4131C12.9447 8.65841 13.1087 7.85587 13.1128 7.02736C13.1156 6.19474 12.9542 5.38673 12.637 4.62657ZM4.27121 7.65626C3.91028 7.65626 3.61633 7.36232 3.61633 7.00001C3.61633 6.63771 3.91028 6.34376 4.27121 6.34376C4.63215 6.34376 4.9261 6.63771 4.9261 7.00001C4.9261 7.36232 4.63352 7.65626 4.27121 7.65626ZM7.00012 7.65626C6.63918 7.65626 6.34524 7.36232 6.34524 7.00001C6.34524 6.63771 6.63918 6.34376 7.00012 6.34376C7.36106 6.34376 7.655 6.63771 7.655 7.00001C7.655 7.36232 7.36106 7.65626 7.00012 7.65626ZM9.72903 7.65626C9.36809 7.65626 9.07414 7.36232 9.07414 7.00001C9.07414 6.63771 9.36809 6.34376 9.72903 6.34376C10.09 6.34376 10.3839 6.63771 10.3839 7.00001C10.3839 7.36232 10.09 7.65626 9.72903 7.65626Z" fill="#DEE6FF"/>
                            </svg>
                        </div>
                    </div>

                    <div className="block w-60 h-56 md:w-72 md:h-64 mr-4 relative hover:scale-105 transition-all duration-150 cursor-pointer animate__animated animate__bounceIn">
                        {/* Image container */}
                        <div className={styles.post_image}>
                            <img className={styles.post_image} src="/image 20.png" alt="" />
                            <div className="w-9 h-9 rounded-full bg-bgr absolute top-0 right-0 md:right-0">
                                <svg className="absolute top-0.5 right-0.5 md:top-0.5 md:right-0.5" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 9L9 15M15 15L9 9L15 15Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex bg-white w-full h-6 p-1 rounded-b-xl">
                            <img className=" scale-50" src="/image 19.png" alt="" />
                            <h1>Inmobiliaria Bohico</h1>
                        </div>

                        <div className="bg-bd w-28 h-8 flex items-center justify-center text-white absolute right-0 bottom-0 rounded-full">
                            <h1>4.5</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4151 4.82735L8.94385 4.32286L7.39209 1.17696C7.34971 1.09083 7.27998 1.0211 7.19385 0.978716C6.97783 0.872075 6.71533 0.960943 6.60732 1.17696L5.05556 4.32286L1.58428 4.82735C1.48857 4.84102 1.40107 4.88614 1.33408 4.9545C1.25309 5.03774 1.20846 5.14973 1.21 5.26586C1.21154 5.38199 1.25912 5.49276 1.34228 5.57383L3.85381 8.02247L3.26045 11.4801C3.24653 11.5605 3.25543 11.6432 3.28614 11.7189C3.31685 11.7945 3.36813 11.86 3.43417 11.908C3.50022 11.9559 3.57838 11.9845 3.6598 11.9903C3.74122 11.9961 3.82264 11.9789 3.89482 11.9408L6.9997 10.3084L10.1046 11.9408C10.1894 11.9859 10.2878 12.001 10.3821 11.9846C10.62 11.9436 10.78 11.718 10.739 11.4801L10.1456 8.02247L12.6571 5.57383C12.7255 5.50684 12.7706 5.41934 12.7843 5.32364C12.8212 5.08438 12.6544 4.8629 12.4151 4.82735Z" fill="#DEE6FF"/>
                            </svg>
                            <h1 className="ml-2">145</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.637 4.62657C12.3303 3.89448 11.884 3.22906 11.3232 2.6674C10.764 2.10475 10.0997 1.65742 9.36809 1.35079C8.61862 1.03515 7.81335 0.873356 7.00012 0.875013H6.97278C6.14563 0.879114 5.34582 1.04318 4.5925 1.36583C3.86717 1.6756 3.20914 2.12373 2.6552 2.68517C2.09975 3.24557 1.65862 3.90867 1.35637 4.63751C1.04262 5.39543 0.883644 6.20845 0.888793 7.02872C0.892895 7.97755 1.11985 8.91954 1.54368 9.76173V11.8399C1.54368 12.1871 1.82532 12.4688 2.17122 12.4688H4.24661C5.09272 12.8957 6.02642 13.1204 6.97414 13.125H7.00286C7.82043 13.125 8.61204 12.9664 9.35852 12.6561C10.0864 12.3531 10.7482 11.911 11.3068 11.3545C11.87 10.7953 12.313 10.1418 12.6234 9.4131C12.9447 8.65841 13.1087 7.85587 13.1128 7.02736C13.1156 6.19474 12.9542 5.38673 12.637 4.62657ZM4.27121 7.65626C3.91028 7.65626 3.61633 7.36232 3.61633 7.00001C3.61633 6.63771 3.91028 6.34376 4.27121 6.34376C4.63215 6.34376 4.9261 6.63771 4.9261 7.00001C4.9261 7.36232 4.63352 7.65626 4.27121 7.65626ZM7.00012 7.65626C6.63918 7.65626 6.34524 7.36232 6.34524 7.00001C6.34524 6.63771 6.63918 6.34376 7.00012 6.34376C7.36106 6.34376 7.655 6.63771 7.655 7.00001C7.655 7.36232 7.36106 7.65626 7.00012 7.65626ZM9.72903 7.65626C9.36809 7.65626 9.07414 7.36232 9.07414 7.00001C9.07414 6.63771 9.36809 6.34376 9.72903 6.34376C10.09 6.34376 10.3839 6.63771 10.3839 7.00001C10.3839 7.36232 10.09 7.65626 9.72903 7.65626Z" fill="#DEE6FF"/>
                            </svg>
                        </div>
                    </div>
                
                    <div className="block w-60 h-56 md:w-72 md:h-64 mr-4 relative hover:scale-105 transition-all duration-150 cursor-pointer animate__animated animate__bounceIn">
                        {/* Image container */}
                        <div className={styles.post_image}>
                            <img className={styles.post_image} src="/image 22.png" alt="" />
                            <div className="w-9 h-9 rounded-full bg-bgr absolute top-0 right-0 md:right-0">
                                <svg className="absolute top-0.5 right-0.5 md:top-0.5 md:right-0.5" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 9L9 15M15 15L9 9L15 15Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex bg-white w-full h-6 p-1 rounded-b-xl">
                            <img className=" scale-50" src="/image 19.png" alt="" />
                            <h1>Inmobiliaria Grupo Intern...</h1>
                        </div>

                        <div className="bg-bd w-28 h-8 flex items-center justify-center text-white absolute right-0 bottom-0 rounded-full">
                            <h1>4.5</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4151 4.82735L8.94385 4.32286L7.39209 1.17696C7.34971 1.09083 7.27998 1.0211 7.19385 0.978716C6.97783 0.872075 6.71533 0.960943 6.60732 1.17696L5.05556 4.32286L1.58428 4.82735C1.48857 4.84102 1.40107 4.88614 1.33408 4.9545C1.25309 5.03774 1.20846 5.14973 1.21 5.26586C1.21154 5.38199 1.25912 5.49276 1.34228 5.57383L3.85381 8.02247L3.26045 11.4801C3.24653 11.5605 3.25543 11.6432 3.28614 11.7189C3.31685 11.7945 3.36813 11.86 3.43417 11.908C3.50022 11.9559 3.57838 11.9845 3.6598 11.9903C3.74122 11.9961 3.82264 11.9789 3.89482 11.9408L6.9997 10.3084L10.1046 11.9408C10.1894 11.9859 10.2878 12.001 10.3821 11.9846C10.62 11.9436 10.78 11.718 10.739 11.4801L10.1456 8.02247L12.6571 5.57383C12.7255 5.50684 12.7706 5.41934 12.7843 5.32364C12.8212 5.08438 12.6544 4.8629 12.4151 4.82735Z" fill="#DEE6FF"/>
                            </svg>
                            <h1 className="ml-2">145</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.637 4.62657C12.3303 3.89448 11.884 3.22906 11.3232 2.6674C10.764 2.10475 10.0997 1.65742 9.36809 1.35079C8.61862 1.03515 7.81335 0.873356 7.00012 0.875013H6.97278C6.14563 0.879114 5.34582 1.04318 4.5925 1.36583C3.86717 1.6756 3.20914 2.12373 2.6552 2.68517C2.09975 3.24557 1.65862 3.90867 1.35637 4.63751C1.04262 5.39543 0.883644 6.20845 0.888793 7.02872C0.892895 7.97755 1.11985 8.91954 1.54368 9.76173V11.8399C1.54368 12.1871 1.82532 12.4688 2.17122 12.4688H4.24661C5.09272 12.8957 6.02642 13.1204 6.97414 13.125H7.00286C7.82043 13.125 8.61204 12.9664 9.35852 12.6561C10.0864 12.3531 10.7482 11.911 11.3068 11.3545C11.87 10.7953 12.313 10.1418 12.6234 9.4131C12.9447 8.65841 13.1087 7.85587 13.1128 7.02736C13.1156 6.19474 12.9542 5.38673 12.637 4.62657ZM4.27121 7.65626C3.91028 7.65626 3.61633 7.36232 3.61633 7.00001C3.61633 6.63771 3.91028 6.34376 4.27121 6.34376C4.63215 6.34376 4.9261 6.63771 4.9261 7.00001C4.9261 7.36232 4.63352 7.65626 4.27121 7.65626ZM7.00012 7.65626C6.63918 7.65626 6.34524 7.36232 6.34524 7.00001C6.34524 6.63771 6.63918 6.34376 7.00012 6.34376C7.36106 6.34376 7.655 6.63771 7.655 7.00001C7.655 7.36232 7.36106 7.65626 7.00012 7.65626ZM9.72903 7.65626C9.36809 7.65626 9.07414 7.36232 9.07414 7.00001C9.07414 6.63771 9.36809 6.34376 9.72903 6.34376C10.09 6.34376 10.3839 6.63771 10.3839 7.00001C10.3839 7.36232 10.09 7.65626 9.72903 7.65626Z" fill="#DEE6FF"/>
                            </svg>
                        </div>
                    </div>

                    <div className="block w-60 h-56 md:w-72 md:h-64 mr-4 relative hover:scale-105 transition-all duration-150 cursor-pointer animate__animated animate__bounceIn">
                        {/* Image container */}
                        <div className={styles.post_image}>
                            <img className={styles.post_image} src="/image 28.png" alt="" />
                            <div className="w-9 h-9 rounded-full bg-bgr absolute top-0 right-0 md:right-0">
                                <svg className="absolute top-0.5 right-0.5 md:top-0.5 md:right-0.5" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 9L9 15M15 15L9 9L15 15Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex bg-white w-full h-6 p-1 rounded-b-xl">
                            <img className=" scale-50" src="/image 19.png" alt="" />
                            <h1>Inmobiliaria Grupo Intern...</h1>
                        </div>

                        <div className="bg-bd w-28 h-8 flex items-center justify-center text-white absolute right-0 bottom-0 rounded-full">
                            <h1>4.5</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4151 4.82735L8.94385 4.32286L7.39209 1.17696C7.34971 1.09083 7.27998 1.0211 7.19385 0.978716C6.97783 0.872075 6.71533 0.960943 6.60732 1.17696L5.05556 4.32286L1.58428 4.82735C1.48857 4.84102 1.40107 4.88614 1.33408 4.9545C1.25309 5.03774 1.20846 5.14973 1.21 5.26586C1.21154 5.38199 1.25912 5.49276 1.34228 5.57383L3.85381 8.02247L3.26045 11.4801C3.24653 11.5605 3.25543 11.6432 3.28614 11.7189C3.31685 11.7945 3.36813 11.86 3.43417 11.908C3.50022 11.9559 3.57838 11.9845 3.6598 11.9903C3.74122 11.9961 3.82264 11.9789 3.89482 11.9408L6.9997 10.3084L10.1046 11.9408C10.1894 11.9859 10.2878 12.001 10.3821 11.9846C10.62 11.9436 10.78 11.718 10.739 11.4801L10.1456 8.02247L12.6571 5.57383C12.7255 5.50684 12.7706 5.41934 12.7843 5.32364C12.8212 5.08438 12.6544 4.8629 12.4151 4.82735Z" fill="#DEE6FF"/>
                            </svg>
                            <h1 className="ml-2">145</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.637 4.62657C12.3303 3.89448 11.884 3.22906 11.3232 2.6674C10.764 2.10475 10.0997 1.65742 9.36809 1.35079C8.61862 1.03515 7.81335 0.873356 7.00012 0.875013H6.97278C6.14563 0.879114 5.34582 1.04318 4.5925 1.36583C3.86717 1.6756 3.20914 2.12373 2.6552 2.68517C2.09975 3.24557 1.65862 3.90867 1.35637 4.63751C1.04262 5.39543 0.883644 6.20845 0.888793 7.02872C0.892895 7.97755 1.11985 8.91954 1.54368 9.76173V11.8399C1.54368 12.1871 1.82532 12.4688 2.17122 12.4688H4.24661C5.09272 12.8957 6.02642 13.1204 6.97414 13.125H7.00286C7.82043 13.125 8.61204 12.9664 9.35852 12.6561C10.0864 12.3531 10.7482 11.911 11.3068 11.3545C11.87 10.7953 12.313 10.1418 12.6234 9.4131C12.9447 8.65841 13.1087 7.85587 13.1128 7.02736C13.1156 6.19474 12.9542 5.38673 12.637 4.62657ZM4.27121 7.65626C3.91028 7.65626 3.61633 7.36232 3.61633 7.00001C3.61633 6.63771 3.91028 6.34376 4.27121 6.34376C4.63215 6.34376 4.9261 6.63771 4.9261 7.00001C4.9261 7.36232 4.63352 7.65626 4.27121 7.65626ZM7.00012 7.65626C6.63918 7.65626 6.34524 7.36232 6.34524 7.00001C6.34524 6.63771 6.63918 6.34376 7.00012 6.34376C7.36106 6.34376 7.655 6.63771 7.655 7.00001C7.655 7.36232 7.36106 7.65626 7.00012 7.65626ZM9.72903 7.65626C9.36809 7.65626 9.07414 7.36232 9.07414 7.00001C9.07414 6.63771 9.36809 6.34376 9.72903 6.34376C10.09 6.34376 10.3839 6.63771 10.3839 7.00001C10.3839 7.36232 10.09 7.65626 9.72903 7.65626Z" fill="#DEE6FF"/>
                            </svg>
                        </div>
                    </div>

                    
            </div>
            <div className="h-10">

            </div>
            


        </div>
    )
}


