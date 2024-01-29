const Desktop = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-8 px-0 pb-0 box-border gap-[55px] tracking-[normal] mq900:gap-[27px]">
      <section className="w-[1230px] flex flex-row items-start justify-start py-0 pr-[30px] pl-5 box-border max-w-full shrink-0 text-left text-base text-white font-raleway">
        <div className="flex-1 flex flex-col items-end justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq700:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[60px]">
              <div className="w-14 h-[35px] rounded bg-black-80 flex flex-row items-start justify-start p-2 box-border relative">
                <b className="absolute my-0 mx-[!important] top-[calc(50%_-_9.5px)] right-[-53px] inline-block whitespace-pre-wrap">
                  <span>{`News   `}</span>
                  <span className="text-black-80">Portal</span>
                </b>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2.5 text-[48px] text-black-80 font-roboto">
                <h1 className="m-0 h-14 relative text-inherit font-bold font-inherit inline-block mq450:text-10xl mq900:text-[38px]">
                  Hot Topics
                </h1>
              </div>
            </div>
            <div className="w-[309px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-right text-[30px] text-blue-1 font-roboto">
              <div className="self-stretch flex flex-row items-start justify-start relative">
                <img
                  className="h-[28.8px] w-[28.8px] absolute my-0 mx-[!important] top-[-4.7px] right-[55.2px] object-contain"
                  loading="eager"
                  alt=""
                  src="/union@2x.png"
                />
                <div className="flex-1 flex flex-col items-center justify-end pt-[102px] pb-0 pr-1 pl-0 relative">
                  <b className="relative mq450:text-[18px] mq900:text-5xl text-blue-500">
                    Wednesday 29 Dec 21’
                  </b>
                  <img
                    className="w-5 h-5 absolute my-0 mx-[!important] top-[0px] right-[0px] object-cover"
                    loading="eager"
                    alt=""
                    src="/logout-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[24px] max-w-full text-[32px] font-roboto">
            <div className="flex-1 rounded-lg flex flex-col items-start justify-start pt-[190px] px-8 pb-8 box-border relative gap-[16px] bg-[url('/public/rectangle-1@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[565px] max-w-full mq450:pt-[123px] mq450:pb-[21px] mq450:box-border mq700:min-w-full">
              <img
                className="w-[870px] h-[400px] relative rounded-lg object-cover hidden max-w-full z-[0]"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.65))] shadow-[5px_10px_50px_rgba(0,_0,_0,_0.11)] z-[1]" />
              <h2 className="m-0 w-[543px] h-36 relative text-inherit leading-[150%] font-bold font-inherit inline-block max-w-full z-[2] mq450:text-lgi mq450:leading-[29px] mq900:text-[26px] mq900:leading-[38px]">
                News Title Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                Lorem Ipsum Dolor Sit Amet
              </h2>
              <div className="relative text-xs leading-[150%] z-[2]">
                2 Hours Ago
              </div>
            </div>
            <div className="h-[388px] w-[276px] flex flex-col items-start justify-start gap-[26px] text-[34px] text-black">
              <div className="self-stretch h-[108px] rounded-lg bg-white1 shadow-[2px_5px_25px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-between pt-5 pb-[21px] pr-5 pl-[30px] box-border gap-[20px]">
                <div className="h-[108px] w-[276px] relative rounded-lg bg-white1 shadow-[2px_5px_25px_rgba(0,_0,_0,_0.05)] hidden" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                  <b className="flex-1 relative z-[1] mq450:text-xl mq900:text-[27px]">
                    17°
                  </b>
                  <b className="relative text-[17px] z-[1]">London, UK</b>
                </div>
                <img
                  className="h-[60px] w-[58.7px] relative overflow-hidden shrink-0 z-[1]"
                  loading="eager"
                  alt=""
                  src="/weather-snow-sun.svg"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px] text-xl text-gray-200">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[8px]">
                  <b className="h-[32.3px] flex-1 relative inline-block mq450:text-base">
                    Thursday
                  </b>
                  <div className="flex flex-col items-start justify-start py-0 pr-[33px] pl-0">
                    <input
                      className="cursor-pointer m-0 w-[25px] h-[25px] relative"
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <div className="w-[81px] flex flex-row items-start justify-start gap-[9px] text-right text-black">
                    <b className="h-[32.3px] flex-1 relative inline-block shrink-0 mq450:text-base">
                      13°
                    </b>
                    <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 text-gray-200">
                      <b className="self-stretch relative mq450:text-base">
                        11°
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px]">
                  <div className="w-[86px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
                    <b className="self-stretch h-[32.3px] relative inline-block shrink-0 mq450:text-base">
                      Friday
                    </b>
                  </div>
                  <input
                    className="cursor-pointer m-0 h-[25px] w-[25px] relative"
                    type="radio"
                    name="radioGroup-1"
                  />
                  <div className="w-[79px] flex flex-row items-start justify-start gap-[5px] text-right text-black">
                    <b className="h-[32.3px] flex-1 relative inline-block shrink-0 mq450:text-base">
                      14°
                    </b>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-gray-200">
                      <b className="self-stretch relative z-[1] mq450:text-base">
                        10°
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[14px]">
                  <b className="h-[32.3px] flex-1 relative inline-block mq450:text-base">
                    Saturday
                  </b>
                  <div className="flex flex-col items-start justify-start py-0 pr-[27px] pl-0">
                    <input
                      className="cursor-pointer m-0 w-[25px] h-[25px] relative"
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <div className="w-20 flex flex-row items-start justify-start gap-[5px] text-right text-black">
                    <b className="h-[32.3px] flex-1 relative inline-block shrink-0 mq450:text-base">
                      17°
                    </b>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-gray-200">
                      <b className="self-stretch relative z-[2] mq450:text-base">
                        14°
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px]">
                  <b className="h-[32.3px] w-[96.8px] relative inline-block shrink-0 mq450:text-base">
                    Sunday
                  </b>
                  <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                    <input
                      className="cursor-pointer m-0 w-[25px] h-[25px] relative"
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <div className="w-20 flex flex-row items-start justify-start gap-[6px] text-right text-black">
                    <b className="h-[32.3px] flex-1 relative inline-block shrink-0 mq450:text-base">
                      19°
                    </b>
                    <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 text-gray-200">
                      <b className="self-stretch relative z-[3] mq450:text-base">
                        17°
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[26px]">
                  <b className="h-[32.3px] flex-1 relative inline-block mq450:text-base">
                    Monday
                  </b>
                  <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                    <input
                      className="cursor-pointer m-0 w-[25px] h-[25px] relative"
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <div className="w-[77px] flex flex-row items-start justify-start gap-[6px] text-right text-black">
                    <b className="h-[32.3px] flex-1 relative inline-block mq450:text-base">
                      16°
                    </b>
                    <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 text-gray-200">
                      <b className="self-stretch relative z-[4] mq450:text-base">
                        12°
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1210px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full shrink-0 text-left text-17xl text-black-80 font-roboto">
        <h2 className="m-0 h-10 relative text-inherit font-bold font-inherit inline-block shrink-0 mq450:text-[22px] mq900:text-10xl">
          Latest News
        </h2>
        <div className="self-stretch grid flex-row items-start justify-start gap-[30px] grid-cols-[repeat(4,_minmax(202px,_1fr))] text-5xl mq450:grid-cols-[minmax(202px,_1fr)] mq900:justify-center mq900:grid-cols-[repeat(2,_minmax(202px,_351px))]">
          <div className="h-[294px] flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
              <img
                className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-3@2x.png"
              />
              <b className="self-stretch h-14 relative inline-block mq450:text-lgi">
                News Title Lorem Ipsum Dolor Sit Amet
              </b>
            </div>
            <div className="relative text-xs text-black-20">1 Hour Ago</div>
          </div>
          <div className="h-[294px] flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
              <img
                className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-4@2x.png"
              />
              <b className="self-stretch h-14 relative inline-block mq450:text-lgi">
                News Title Lorem Ipsum Dolor Sit Amet
              </b>
            </div>
            <div className="relative text-xs text-black-20">1 Hour Ago</div>
          </div>
          <div className="h-[294px] flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
              <img
                className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-3@2x.png"
              />
              <b className="self-stretch h-14 relative inline-block mq450:text-lgi">
                News Title Lorem Ipsum Dolor Sit Amet
              </b>
            </div>
            <div className="relative text-xs text-black-20">1 Hour Ago</div>
          </div>
          <div className="h-[294px] flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
              <img
                className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/rectangle-6@2x.png"
              />
              <b className="self-stretch h-14 relative inline-block mq450:text-lgi">
                News Title Lorem Ipsum Dolor Sit Amet
              </b>
            </div>
            <div className="relative text-xs text-black-20">1 Hour Ago</div>
          </div>
        </div>
      </section>
      <section className="w-[1210px] grid flex-row items-start justify-start py-0 px-5 box-border gap-[30px] min-h-[317px] max-w-full shrink-0 grid-cols-[repeat(4,_minmax(202px,_1fr))] text-left text-5xl text-black-80 font-roboto mq450:grid-cols-[minmax(202px,_1fr)] mq900:justify-center mq900:grid-cols-[repeat(2,_minmax(202px,_351px))]">
        <div className="h-[294px] flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
            <img
              className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src="/rectangle-7@2x.png"
            />
            <b className="self-stretch h-14 relative inline-block mq450:text-lgi">
              News Title Lorem Ipsum Dolor Sit Amet
            </b>
          </div>
          <div className="relative text-xs text-black-20">1 Hour Ago</div>
        </div>
        <div className="h-[294px] flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
            <img
              className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src="/rectangle-8@2x.png"
            />
            <b className="self-stretch h-14 relative inline-block mq450:text-lgi">
              News Title Lorem Ipsum Dolor Sit Amet
            </b>
          </div>
          <div className="relative text-xs text-black-20">1 Hour Ago</div>
        </div>
        <div className="h-[294px] flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
            <img
              className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src="/rectangle-9@2x.png"
            />
            <b className="self-stretch h-14 relative inline-block mq450:text-lgi">
              News Title Lorem Ipsum Dolor Sit Amet
            </b>
          </div>
          <div className="relative text-xs text-black-20">1 Hour Ago</div>
        </div>
        <div className="h-[294px] flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
            <img
              className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src="/rectangle-10@2x.png"
            />
            <b className="self-stretch h-14 relative inline-block mq450:text-lgi">
              News Title Lorem Ipsum Dolor Sit Amet
            </b>
          </div>
          <div className="relative text-xs text-black-20">1 Hour Ago</div>
        </div>
      </section>
      <footer className="self-stretch bg-white flex flex-row items-center justify-center pt-[31px] px-[31px] pb-[33px] box-border max-w-full shrink-0 text-center text-base text-black-20 font-raleway">
        <div className="h-[83px] w-[1440px] relative bg-white hidden max-w-full" />
        <b className="relative z-[1]">Copyright 2021 News Portal</b>
      </footer>
    </div>
  );
};

export default Desktop;
