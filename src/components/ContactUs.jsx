const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl mt-4" >Contact US</h1>
      <form className="flex flex-col items-center justify-center">
        <input type="email" placeholder="Email" className="px-10 m-4 border border-pink-200 rounded-md shadow-lg"/>
        <input type="text" placeholder="Write your query" className="p-10 m-4 border border-pink-200 rounded-md shadow-lg" />
        <button className="bg-black text-white p-2 rounded-lg">submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
