const FooterImg = () => {
  return (
    <div className="text-center font-normal text-sm block text-[#f3f5f7]">
      <div className="lg:py-11 mx-auto">
        <p className="font-normal text-xs text-white/80 whitespace-normal mr-5 mb-5 ml-5">
          KAYAK is part of Booking Holdings Inc., the world leader in online
          travel & related services.
        </p>
        <ul className="list-none">
          <li
            className="mx-5 w-[94px] h-[20px] invisible lg:visible lg:inline-block lg:p-0 lg:bg-[length:122px_148px] lg:bg-no-repeat"
            style={{
              backgroundImage: "url('/img/pcln-group-logos-2x.png')",
            }}
          ></li>
          <li
            className="mx-5 w-[89px] h-[28px] invisible lg:visible lg:inline-block lg:p-0 lg:bg-[length:122px_148px] lg:bg-no-repeat"
            style={{
              backgroundPosition: '0 -40px',
              backgroundImage: "url('/img/pcln-group-logos-2x.png')",
            }}
          ></li>
          <li
            className="mx-5 w-[98px] h-[24px] invisible lg:visible lg:inline-block lg:p-0 lg:bg-[length:122px_148px] lg:bg-no-repeat"
            style={{
              backgroundPosition: '0 -126px',
              backgroundImage: "url('/img/pcln-group-logos-2x.png')",
            }}
          ></li>
          <li
            className="mx-5 w-[92px] h-[28px] invisible lg:visible lg:inline-block lg:p-0 lg:bg-[length:122px_148px] lg:bg-no-repeat"
            style={{
              backgroundPosition: '0 -16px',
              backgroundImage: "url('/img/pcln-group-logos-2x.png')",
            }}
          ></li>
          <li
            className="mx-5 w-[48px] h-[28px] invisible lg:visible lg:inline-block lg:p-0 lg:bg-[length:122px_148px] lg:bg-no-repeat"
            style={{
              backgroundPosition: '0 -70px',
              backgroundImage: "url('/img/pcln-group-logos-2x.png')",
            }}
          ></li>
          <li
            className="mx-5 w-[122px] h-[28px] invisible lg:visible lg:inline-block lg:p-0 lg:bg-[length:122px_148px] lg:bg-no-repeat"
            style={{
              backgroundPosition: '0 -96px',
              backgroundImage: "url('/img/pcln-group-logos-2x.png')",
            }}
          ></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterImg;
