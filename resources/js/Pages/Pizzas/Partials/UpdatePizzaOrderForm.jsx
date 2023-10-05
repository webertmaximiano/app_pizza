import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";

export default function UpdatePizzaOrderForm({pizza, className=''}) {
console.log(pizza)
    const statusOptions = [
        'Ordered',
        'Prepping',
        'Baking',
        'Checking',
        'Ready'
    ]
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Order Information</h2>
                <p className="mt-1 text-sm text-gray-600">
                    View e change any information associated with this order.
                </p>
            </header>

            <form className="mt-6 space-y-6">

                <div>
                    <InputLabel htmlFor="size" value="Size" />

                    <TextInput
                        id="size"
                        className="mt-1 block w-full"
                        value={pizza.size}
                        disabled
                    />

                </div>

                <div>
                    <InputLabel htmlFor="crust" value="Crust" />

                    <TextInput
                        id="crust"
                        className="mt-1 block w-full"
                        value={pizza.crust}
                        disabled
                    />

                </div>

                <div>
                    <InputLabel htmlFor="toppings" value="Toppings" />

                    <TextInput
                        id="toppings"
                        className="mt-1 block w-full"
                        value={pizza.toppings.join(',')}
                        disabled
                    />

                </div>
                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        options={statusOptions}
                        value={pizza.status}
                    />

                    <InputError className="mt-2" message={''} />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton>Save Changes</PrimaryButton>
                </div>
            </form>
        </section>
    )
}