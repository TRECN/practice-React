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
            discription:
            "Rishabh",
        },
    ]

    const {slug}=useParams()
    const aboutContent =aboutData.find(item=>item.slug===slug)
    const {title,discription}=aboutContent

    return (
        <div>
            <h1>{title}</h1>
            <p>{discription}</p>
        </div>
    )

}

export default SinglePage