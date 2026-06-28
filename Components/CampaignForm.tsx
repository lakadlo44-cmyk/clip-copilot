"use client";

import { useState } from "react";
import IdeaCard from "./IdeaCard";
import FileUpload from "./FileUpload";

export default function CampaignForm() {

const [ideas,setIdeas]=useState<any[]>([]);
const [loading,setLoading]=useState(false);

async function generate(e:any){

e.preventDefault();

setLoading(true);

const res=await fetch("/api/generate",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
campaign:e.target.campaign.value,
rules:e.target.rules.value
})
});

const data=await res.json();

setIdeas(data.ideas);

setLoading(false);

}

return(

<>
<form onSubmit={generate}>

<input
name="campaign"
placeholder="Campaign Name"
/>

<textarea
rows={8}
name="rules"
placeholder="Paste campaign brief..."
/>

<button>

{loading?"Generating...":"Generate Ideas"}

</button>

</form>

<div className="grid gap-6 mt-10">

{ideas.map((idea,index)=>

<IdeaCard
key={index}
idea={idea}
/>

)}

</div>

</>

);

}
