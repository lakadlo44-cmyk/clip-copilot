export default function IdeaCard({idea}:any){

return(

<div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">

<h2 className="text-2xl font-bold">

{idea.title}

</h2>

<p className="mt-3">

<b>Hook:</b>

{idea.hook}

</p>

<p className="mt-3">

<b>On Screen Text:</b>

{idea.text}

</p>

<p className="mt-3">

<b>Caption:</b>

{idea.caption}

</p>

<p className="mt-3">

<b>Hashtags:</b>

{idea.hashtags}

</p>

<p className="mt-3 text-green-400">

🔥 Viral Score: {idea.score}/100

</p>

</div>

);

}
