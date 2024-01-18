import {ShareSocial} from 'react-share-social' 
const SocialShare = () => {

    const shareProducts = [{
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ed313dc0943d74d1cd06306416d9fd81779fae534cf02fa33dc4f5513d5c062?apiKey=d15e42286684479bbc853a10c1e3f3db&",
        onclick: () => window.open('https://www.facebook.com', '_blank')
    }, {
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a821787d499c1d4b2b958ecb3eb8f936207d4f0db01eef898933d690c461817?apiKey=d15e42286684479bbc853a10c1e3f3db&",
        onclick: () => window.open('https://www.instagram.com', '_blank')
    }, {
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/49441f90835a0a9740bd0ca50df5288e38eb2c502f43c2706142e8229c22cbd4?apiKey=d15e42286684479bbc853a10c1e3f3db&",
        onclick: () => window.open('https://www.linkedin.com', '_blank')
    }, {
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/18f336aae467a95bfaf56e2f68bd4a6cfeb85db73018e9714afd54de7af33015?apiKey=d15e42286684479bbc853a10c1e3f3db&",
        onclick: () => window.open('https://wa.me/1234567890', '_blank')
    }, {
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/a92925048654b5dceaed239e42b7fcf2f7410185e697411358fb1d569b3ba81b?apiKey=d15e42286684479bbc853a10c1e3f3db&",
        onclick: () => { }
    }]

    const style = {
      
        copyContainer: {
          border: '1px solid blue',
          background: 'rgb(0,0,0,0.7)'
        },
        title: {
          color: 'aquamarine',
          fontStyle: 'italic'
        }
      };

    return (<>
        <div className=" text-neutral-700 text-2xl font-bold leading-10  mt-10 self-start lg:ml-2.5 md:ml-2.5 ml-0">
            Share this product
        </div>
        <div className="flex w-[201px] max-w-full items-stretch gap-1  mt-2 self-start lg:ml-2.5 md:ml-2.5 ml-0">
            <ShareSocial
                // url={`${window?.location?.href}`}
                url={`https://stackoverflow.com/questions/72040141/is-it-impossible-share-to-instagram-using-reactnot-react-native`}
                // style={style}
                onSocialButtonClicked={ (data) => console.log(data)}  
                socialTypes={['facebook',   'linkedin','whatsapp']}
            />
            {shareProducts.map((elm, index) => {
                return <div onClick={() => elm?.onclick()}>
                    {/* <img
                        key={index}
                        loading="lazy"
                        src={elm?.img}

                        className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
                    /> */}

                </div>
            })}
        </div>
    </>);
}

export default SocialShare