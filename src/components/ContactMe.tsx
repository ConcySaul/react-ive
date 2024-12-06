function ContactMe() {
    return (
        <section className="h-screen bg-[#0a011e] border-t-2 border-[#984AA5] flex flex-col justify-center items-center">
            <div className="text-[#f18ecd] text-4xl md:text-6xl font-goldman pt-8">
                Got a project in mind?
            </div>
            <div className="text-[#f18ecd] text-4xl md:text-6xl font-goldman">
                Tell me more.
            </div>
            <form className="pt-8 w-1/2">
                <fieldset className="flex flex-col gap-y-6">
                    <label className="text-[#f18ecd]" htmlFor="name">NAME</label>
                    <input type="text" name="name" id="name" className="p-3 rounded"/>
                    <label className="text-[#f18ecd]" htmlFor="email">EMAIL</label>
                    <input type="email" name="email" id="email" className="p-3 rounded"/>
                    <label className="text-[#f18ecd]" htmlFor="message">MESSAGE</label>
                    <textarea className="max-h-36 min-h-12 w- appearance-none rounded-sm" name="message" id="message"></textarea>
                    <button className="bg-[#f18ecd] text-[#250655] hover:bg-[#250655] hover:text-[#f18ecd] font-bold py-2 px-4 rounded">Hit me up</button>
                </fieldset>
            </form>
        </section>
    );
}

export default ContactMe;