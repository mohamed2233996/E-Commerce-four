import React, { useEffect, useState } from 'react';
import ScetionCarousel from '../components/scetionCarousel';
import SectionTitle from '../components/sectionTitle';

const Categories = () => {

    const [categories, setCategories] = useState()
    function getcategory() {
        useEffect(() => {
            fetch('https://fakestoreapi.in/api/products/category')
                .then(response => response.json())
                .then(data => setCategories(data.categories))
                .catch(error => console.error('Error:', error))
        }, []);

        return (
            categories?.map((Categ) => {
                return (
                    <a className="flex items-center flex-col gap-4 mb-4 py-6 px-10 border border-solid rounded-sm hover:bg-Secondary hover:text-white"
                    href={Categ}>
                        <span className='svg-span'>
                            {
                            Categ === "tv" ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={60} height={60} fill={"none"}>
                                <path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M9 3L12 6L16 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            : Categ === "audio" ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={60} height={60} fill={"none"}>
                                <path d="M17 14.3045C17 13.9588 17 13.786 17.052 13.632C17.2032 13.1844 17.6018 13.0108 18.0011 12.8289C18.45 12.6244 18.6744 12.5222 18.8968 12.5042C19.1493 12.4838 19.4022 12.5382 19.618 12.6593C19.9041 12.8198 20.1036 13.1249 20.3079 13.373C21.2513 14.5188 21.7229 15.0918 21.8955 15.7236C22.0348 16.2334 22.0348 16.7666 21.8955 17.2764C21.6438 18.1979 20.8485 18.9704 20.2598 19.6854C19.9587 20.0511 19.8081 20.234 19.618 20.3407C19.4022 20.4618 19.1493 20.5162 18.8968 20.4958C18.6744 20.4778 18.45 20.3756 18.0011 20.1711C17.6018 19.9892 17.2032 19.8156 17.052 19.368C17 19.214 17 19.0412 17 18.6955V14.3045Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M7 14.3046C7 13.8694 6.98778 13.4782 6.63591 13.1722C6.50793 13.0609 6.33825 12.9836 5.99891 12.829C5.55001 12.6246 5.32556 12.5224 5.10316 12.5044C4.43591 12.4504 4.07692 12.9058 3.69213 13.3732C2.74875 14.519 2.27706 15.0919 2.10446 15.7237C1.96518 16.2336 1.96518 16.7668 2.10446 17.2766C2.3562 18.1981 3.15152 18.9705 3.74021 19.6856C4.11129 20.1363 4.46577 20.5475 5.10316 20.496C5.32556 20.478 5.55001 20.3757 5.99891 20.1713C6.33825 20.0167 6.50793 19.9394 6.63591 19.8281C6.98778 19.5221 7 19.131 7 18.6957V14.3046Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M19 12.5V10.5C19 6.63401 15.866 3.5 12 3.5C8.13401 3.5 5 6.63401 5 10.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                            </svg>
                            : Categ === "laptop" ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={60} height={60} fill={"none"}>
                                <path d="M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5.5H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            : Categ === "mobile" ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={60} height={60} fill={"none"}>
                                <path d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M11 19H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                            : Categ === "gaming" ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={60} height={60} fill={"none"}>
                                <path d="M2 14.5C2 11.2125 2 9.56878 2.90796 8.46243C3.07418 8.25989 3.25989 8.07418 3.46243 7.90796C4.56878 7 6.21252 7 9.5 7H14.5C17.7875 7 19.4312 7 20.5376 7.90796C20.7401 8.07418 20.9258 8.25989 21.092 8.46243C22 9.56878 22 11.2125 22 14.5C22 17.7875 22 19.4312 21.092 20.5376C20.9258 20.7401 20.7401 20.9258 20.5376 21.092C19.4312 22 17.7875 22 14.5 22H9.5C6.21252 22 4.56878 22 3.46243 21.092C3.25989 20.9258 3.07418 20.7401 2.90796 20.5376C2 19.4312 2 17.7875 2 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M12 7V5C12 4.44772 12.4477 4 13 4C13.5523 4 14 3.55228 14 3V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 16L8.5 14.5M8.5 14.5L7 13M8.5 14.5L7 16M8.5 14.5L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M17 15.5L17 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={60} height={60} fill={"none"}>
                                <path d="M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            }
                        </span>
                        <h3 className='font-bold first-letter:uppercase mt-2'>{Categ}</h3>
                    </a>
                )
            })
        )
    }



    return (
        <div className="categories">
            <div className='container m-auto py-24 border-b border-gray-300'>
                <SectionTitle
                    title='Categories'
                    titleColor="text-Secondary"
                />
                <h2 className="font-bold text-3xl mt-4 mb-16 md:mb-0">Browse By Category</h2>

                <ScetionCarousel
                    carouselItemsDiv={getcategory()}
                    arrowsDisplay=""
                    flexorgrid="flex"
                    justify=""
                />
            </div>
        </div>
    );
}

export default Categories;
