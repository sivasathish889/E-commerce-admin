import Button from "../ui/Button";
import Input from "../ui/Input";

const General = () => {
  return (
    <div className="p-5">
      <div className="header">
        <p className="text-lg font-semibold mb-4">Store Informations</p>
      </div>
      <main className="main w-full">
        <div className="md:flex md:gap-4 w-full">
          <Input label="Store Name" placeholder="Enter your store name" />
          <Input label="Store URL" placeholder="Enter your store URL" />
        </div>
        <div className="descripion">
          <Input
            label="Store Description"
            placeholder="Enter your store description"
          />
        </div>
        <div className="md:flex md:gap-4 w-full">
          <Input label="Email" placeholder="Enter your email address" />
          <Input label="Phone Number" placeholder="Enter your phone number" />
        </div>
        <div className="flex items-end w-full justify-end">
          <Button size="md">Save Changes</Button>
        </div>
      </main>
    </div>
  );
};

export default General;
