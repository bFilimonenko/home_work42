import './MainPage.scss';

export const MainPage = () => {
  return (
    <>
      <h1 className='main-title'>HELLO</h1>
      <div className="container">
        <div id="totoro">
          <div className="head">
            <div className="ear ear-left"></div>
            <div className="ear ear-right"></div>
            <div className="eye eye-left">
              <div className="pupil"></div>
            </div>
            <div className="eye eye-right">
              <div className="pupil"></div>
            </div>
            <div className="nose"></div>
            <div className="mouth">
              <div className="mouth-upper">
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
              </div>
              <div className="mouth-lower">
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
              </div>
            </div>
            <div className="whiskas whiskas-left">
              <div className="whiska whiska-top"></div>
              <div className="whiska"></div>
              <div className="whiska whiska-bottom"></div>
            </div>
            <div className="whiskas whiskas-right">
              <div className="whiska whiska-top"></div>
              <div className="whiska"></div>
              <div className="whiska whiska-bottom"></div>
            </div>
          </div>
          <div className="body">
            <div className="belly">
              <div className="chevron chevron-large chevron-left"></div>
              <div className="chevron chevron-large chevron-center"></div>
              <div className="chevron chevron-large chevron-right"></div>
              <div className="chevron chevron-small chevron-left"></div>
              <div className="chevron chevron-small chevron-center-left"></div>
              <div className="chevron chevron-small chevron-center-right"></div>
              <div className="chevron chevron-small chevron-right"></div>
            </div>
            <div className="arm arm-left">
              <div className="nail"></div>
              <div className="nail"></div>
              <div className="nail"></div>
            </div>
            <div className="arm arm-right">
              <div className="nail"></div>
              <div className="nail"></div>
              <div className="nail"></div>
            </div>
            <div className="leg leg-left"></div>
            <div className="leg leg-right"></div>
          </div>
        </div>
      </div>
    </>
  );
};
