import React from "react";
import { useParams } from "react-router";

const SinglePage=()=>{
    console.log(useParams())
    const aboutData=[
        {
            slug:"about-app",
            title:"About the App",
            discription:
            "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
        },
        {
            slug: "about-author",
            title: "About the Author",
            description:
              "This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic.",
          },
    ]
    return <div>Hello from single page</div>

}

export default SinglePage