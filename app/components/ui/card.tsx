export default function SkillCard() {
    return (
        <div className="flex gap-4">
            <div className="bg-slate-700/60 shadow-xl backdrop-blur-3xl p-6 rounded-2xl max-w-[50%] hover:translate-y-3">
                <h3>React</h3>
                <p>I am really good with react.</p>
            </div>
            <div className="bg-slate-700/60 shadow-xl backdrop-blur-3xl p-6 rounded-2xl max-w-[50%] hover:scale-105">
                <h3>Docker</h3>
                <p>I am equiped with the best skills, to build production ready application</p>
            </div>
        </div>
    )
}