import { Headline } from './Headline';

export const Goals = () => {
    return (
        <>
            <div className="mr-1 text-center">
                <Headline headline="Success Stories" />
                <p>The mission of the ROTO centre is to help special
                    needs children and their families improve and
                    maintain a healthy and independent lifestyle; to
                    improve their quality of life. Our four-pronged
                    purpose is as follows:
                </p>
            </div>
            <div class="row justify-content-center mb-5">
                <div className="text-center col-sm-12 col-lg-2">
                    <br />
                    <i className="bi bi-emoji-smile " style={{ fontSize: 150, padding: 50, color: "#ff2400" }}></i>
                    <h4>ROTO’S current enrollment is 8 students.</h4>
                    <br />
                </div>

                <div className="text-center col-sm-12 col-lg-2">
                    <br />
                    <i className="bi bi-house-door" style={{ fontSize: 150, padding: 50, color: "#1fcecb" }}></i>
                    <h4>2020 We finally have our  own school premises from  donated land.</h4>
                    <br />
                </div>
                <div className="text-center col-sm-12 col-lg-2">
                    <br />
                    <i class="bi bi-clock" style={{ fontSize: 150, padding: 50, color: "#ffef00" }}></i>
                    <h4>This year we celebrate 8  years in the school's  operation</h4>
                </div>
            </div>
        </>
    )
}