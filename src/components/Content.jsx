import React from 'react'




const Content=()=>{

    const allStars=document.querySelectorAll('.star');
    allStars.forEach((star,i)=>{
        star.onclick=function (){
            let current_star_level=i+1;
            allStars.forEach((star,j)=>{
                if(current_star_level>=j+1){
                   star.innerHTML='&#9733';
                }else {
                    star.innerHTML='&#9734'
                }
            })
        }
    })

    return <div className='content'>





        <div className='content1'>
            <div className='goods1'>
                <div className='slide-track'>
                    <div className='slide con1'/>
                    <div className='slide con2'/>
                    <div className='slide con3'/>
                </div>
            </div>
            <div className='goods2'/>
        </div>


        <div className='content2'>
            <div className='sales'>Новые акции</div>
            <div className='showAll'><a href="">Показать все</a></div>
        </div>

            <div className='content3'>

                <div className='stuff zero'>
                    <div className='stuffCon'><div className='stuffBord'>
                        <img className='Mark' src={'https://www.clipartmax.com/png/full/1-10105_location-clipart-location-pin-white-clip-art-at-clker-location-clipart.png'} width="15" height="24"/>&nbsp;ТЦ Атриум на Науры...</div>
                    <div className='bookmark'><img className='book' src={'https://cdn.iconscout.com/icon/free/png-256/bookmark-1773018-1508960.png'} width="20" height="20"/></div>
                        <div className='saleMark'>до -35%</div>
                    </div>
                    <div className='stuffInfo'>Посещение парка в будние, выходные и праздничные дни</div>
                    <div className='stuffInfo InfoChild'>Парк развлечений Nasledn... · 5 покупок</div>
                    <div className="star-rating">
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                    </div>
                    <div className='price'>&nbsp;от 5600 тг</div>
                </div>

                <div className='stuff one'>
                <div className='stuffCon first'><div className='stuffBord'>
                    <img className='Mark' src={'https://www.clipartmax.com/png/full/1-10105_location-clipart-location-pin-white-clip-art-at-clker-location-clipart.png'} width="15" height="24"/>&nbsp;ТРЦ Sputnik на Мом...</div>
                    <div className='bookmark'><img className='book' src={'https://cdn.iconscout.com/icon/free/png-256/bookmark-1773018-1508960.png'} width="20" height="20"/></div>
                    <div className='saleMark'>до -35%</div>
                </div>
                    <div className='stuffInfo'>Посещение парка в будние, выходные и праздничные дни</div>
                    <div className='stuffInfo InfoChild'>Парк развлечений Nasledn... · 5 покупок</div>
                    <div className="star-rating">
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                    </div>
                    <div className='price'>&nbsp;от 5600 ₸</div>
                </div>

                <div className='stuff two'>
                    <div className='stuffCon second'><div className='stuffBord'>
                        <img className='Mark' src={'https://www.clipartmax.com/png/full/1-10105_location-clipart-location-pin-white-clip-art-at-clker-location-clipart.png'} width="15" height="24"/>&nbsp;пос. Жандосов</div>
                        <div className='bookmark'><img className='book' src={'https://cdn.iconscout.com/icon/free/png-256/bookmark-1773018-1508960.png'} width="20" height="20"/></div>
                        <div className='saleMark'>до -50%</div>
                    </div>
                    <div className='stuffInfo'>Проживание в коттеджах «Полулюкс» и VIP</div>
                    <div className='stuffInfo InfoChild'>«Home Club» · 109 покупок</div>
                    <div className="star-rating">
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                        <button className="star">&#9734;</button>
                    </div>
                    <div className='price'>&nbsp;от 29 000 ₸</div>
                </div>






            </div>




    </div>
}
export default Content;