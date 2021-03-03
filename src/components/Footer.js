import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="about-contact">
                    <h4>ABOUT</h4>
                    <p>Hàng chục ngàn công thức nấu ăn ngon, đơn giản, dễ làm cùng nhiều tính năng hấp dẫn giúp cho việc nấu ăn dễ dàng và vui hơn mỗi ngày với Cookies!</p>
                    <p>Tìm công thức nấu ăn? Tham khảo cách làm các món ăn mà bạn yêu thích?</p>
                    <p>Chia sẻ công thức bạn yêu thích đến với mọi người qua mạng xã hội.</p>
                </div>
                <div className="contact">
                    <p>Email: cookiespageco.fanpage@gmail.com</p>
                    <p>Contact: (+84)0123-456-789</p>
                    <p>Country: (+84) Viet Nam</p>
                </div>
                <div className="contact2">
                    <form className="form-inline my-2 my-lg-0" >
                        <input className="form-control mr-sm-2" type="search" placeholder="Your Email Address..." aria-label="Search" icon="fa fa-icon-search"/>
                        <button className="btn btn-warning my-2 my-sm-0" type="submit" onclick="{Login}"  >Sign Up</button>
                    </form>
                </div>
                <div className="reserved">
                    © 2020 Copyright:
                    <a className="text-dark">Cookiespageco.fanpage@gmail.com</a>
                </div>

            </div>
        );
    }
}

export default Footer;
