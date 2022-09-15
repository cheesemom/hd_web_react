import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SOLUTION = [
    { id: 1, content: "블루투스 태깅", description: "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다.", link: "/" },
    { id: 2, content: "모션 콜 버튼", description: "모션인식센서를 활용하여, 손을 위아래로 움직이는 동작만으로 버튼인식이 가능하기 때문에, 박테리아와 바이러스로부터 자유롭습니다.", link: "/" },
    { id: 3, content: "터치리스 버튼 태깅", description: "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다.", link: "/" },
    { id: 4, content: "터치리스 풋버튼", description: "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다.", link: "/" },
    { id: 5, content: "", description: "", link: "/" },
    { id: 6, content: "", description: "", link: "/" },
    { id: 7, content: "", description: "", link: "/" },
    { id: 8, content: "", description: "", link: "/" },
    { id: 9, content: "", description: "", link: "/" },
]


const Solution = () => {
    return (
        <section className="Solution csc">
            <h2>클린 무빙 솔루션</h2>
            <p>접촉 없이 편하게 이동합니다.</p>

            <div className="container">
                <Slider>
                    {
                        SOLUTION.map(img => {
                            return (
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/main_s0" + img.id + ".jpg"} alt="" />
                                </figure>
                            )
                        })
                    }
                </Slider>

                <div className="box">
                    <div className="content">

                    </div>

                    <div className="num">
                        01 <span> 09</span>
                    </div>
                </div>

                <div className="arrows">
                    <i className='xi-arrow-left'></i>
                    <i className='xi-arrow-right'></i>
                </div>
            </div>
        </section >
    )
}

export default Solution;