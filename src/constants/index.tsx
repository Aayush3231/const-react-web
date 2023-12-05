export const navLinks =[
    {href: "/", label: "Home" },
    {href:"/aboutus",label: "About Us"},
    {href:"/contactus",label: "Contact Us"}
];      //Navbar 

export const infos=[
    {title:"New Project:",href:"tel:+45678910", label:"+456 789 10"},
    {title:"General Enquiries:",href:"tel:+45678910",label:" +456 789 10"},
    {href:"enquiries@constcomapny.com",label:"enquiries@constcomapny.com"}
] //navbar contacts content

//CarouselContents
interface Content {
  title: string;
  subtext: string;
  smaller: string;
}

const content1: Content[] = [
  {
    title: 'We Provide Outstanding Construction Services',
    subtext: 'We have provided complete remodeling and construction solutions for small as well as big structures',
    smaller: 'Residental And Commercial Buildings'
  }
];

const content2: Content[] = [
  {
    title: 'This is for second Slide',
    subtext: 'This contains some small text',
    smaller: 'Some smaller text'
  }
];

const content3: Content[] = [
  {
    title: 'This is for third Slide',
    subtext: 'This contains some small text',
    smaller: 'Some smaller text'
  }
];

const content4: Content[] = [
  {
    title: 'This is for fourth Slide',
    subtext: 'This contains some small text',
    smaller: 'Some smaller text'
  }
];

export const contents: Content[][] = [content1, content2, content3, content4];

const contentByIndex = (index: number): Content[] => contents[index % contents.length];
export default contentByIndex;