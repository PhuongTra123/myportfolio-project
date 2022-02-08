import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LineShareButton,
    LineIcon
} from 'react-share'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Tran Thi Phuong Tra</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-555">0393581148</a>
                        </div>
                        <div className="d-flex">
                            <p>phuongtracly1998@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.youtube.com/channel/UCEYlA3JkXgCUeOJTLfhG9xg"}
                                quote={"Frontend Developer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.youtube.com/channel/UCEYlA3JkXgCUeOJTLfhG9xg"}
                                quote={"Frontend Developer"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://www.youtube.com/channel/UCEYlA3JkXgCUeOJTLfhG9xg"}
                                quote={"Frontend Developer"}
                                hashtag="#javascript"
                            >
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                            <LineShareButton
                                url={"https://www.youtube.com/channel/UCEYlA3JkXgCUeOJTLfhG9xg"}
                                quote={"Frontend Developer"}
                                hashtag="#javascript"
                            >
                                <LineIcon className="mx-3" size={36}/>
                            </LineShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
