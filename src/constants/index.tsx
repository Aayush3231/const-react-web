export const navLinks =[
    {href: "#home", label: "Home" },
    {href:"#aboutus",label: "About Us"},
    {href:"#contactus",label: "Contact Us"}
];      //Navbar 

export const infos=[
    {title:"New Project:",href:"tel:+45678910", label:"+456 789 10"},
    {title:"General Enquiries:",href:"tel:+45678910",label:" +456 789 10"},
    {href:"enquiries@constcomapny.com",label:"enquiries@constcomapny.com"}
] //navbar contacts content

//CarouselContents
const content1="Hello This is a sample text in content 1";
const content2="Hello This is a sample text in content 2";
const content3="Hello This is a sample text in content 3";
const content4="Hello This is a sample text in content 4";

export const contents : string[] = [content1,content2,content3,content4]
 
const contentByIndex = (index:any):string =>contents[index % contents.length]
export default contentByIndex