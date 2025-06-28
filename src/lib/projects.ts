export const Projects:Projects[] = [
    {
        title:"CRM BASED ECOMMERCE STORE",
        description:"CRM enabled ecommerce store , where the store owner can manage the whole store through crm , a realtime analytics , product management,order management, payment integrations.",
        image:"/crm.png",
        techUsed:["NodeJS" , "Javascript","AWS" , "Mysql" , "Reactjs" , "ExpressJs","Astro","HTML/CSS"],
        liveLink:"",
        githubLink:"hhttps://github.com/Harshroxnox/E-Commerce"
    },
    {
        title:"Expense Tracker",
        description:"Expense tracking platform enabling users to log daily expenses, set monthly budgets, and visualize real-time analytics through interactive charts.",
        image:"/expense.png",
        techUsed:["NodeJS" , "Javascript","Vercel" , "MongoDB" , "Reactjs" , "TailwindCSS" , "ExpressJs"],
        liveLink:"https://expense-tracker-six-theta-53.vercel.app/",
        githubLink:"https://github.com/RAHUl-CHAUDHARY01/ExpenseTracker/"
    },
    {
        title:"Pixorama",
        description:"Full-stack social media app with real-time photo posting, utilizing MongoDB for managing 1,000+ user records.",
        image:"/pixorama.png",
        techUsed:["React-Vite" , "JavaScript", "MongoDB" ,"NodeJS","ExpressJS","TailwindCSS"],
        liveLink:"https://pixorama-six.vercel.app/",
        githubLink:"https://github.com/RAHUl-CHAUDHARY01"
    },
    {
        title:"CodeReader",
        description:"Full-stack code execution platform supporting 200+ users, integrating real-time updates and version control, and independently optimized CRUD operations for smooth multi-user collaboration.",
        image:"/codereader.png",
        techUsed:["React-Vite" , "JavaScript" , "ExpressJS","TailwindCSS"],
        liveLink:"https://codereaderapp2.netlify.app/login",
        githubLink:"https://github.com/RAHUl-CHAUDHARY01/Code-Reader"
    },
    {
        title:"ShivikaInfra",
        description:"[Freelance Project] A real-estate company website project to showcase their projects,services,work areas.",
        image:"/shivika.png",
        techUsed:["React" , "JavaScript" ,"TailwindCSS","HTML","Vercel"],
        liveLink:"https://www.shivikainfra.com/",
        githubLink:"https://github.com/RAHUl-CHAUDHARY01/shivikaInfra"
    },
    {
        title:"Branding Website",
        description:"[Freelance Project] A branding company website project to showcase their projects,services,work areas.",
        image:"/branding.png",
        techUsed:["React" , "JavaScript" ,"TailwindCSS","HTML","Vercel"],
        liveLink:"https://branding-eta.vercel.app/",
        githubLink:"https://github.com/RAHUl-CHAUDHARY01/branding"
    },
    
    
]

interface Projects{
    title:string
    liveLink:string
    githubLink:string
    description:string
    image:string
    techUsed:string[]
}