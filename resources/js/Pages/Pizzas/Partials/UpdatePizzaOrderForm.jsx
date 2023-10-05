import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdatePizzaOrderForm({pizza, className=''}) {
//console.log(pizza)
    const { data, setData, errors, patch, processing, recentlySuccessful } = useForm({
        size: pizza.size,
        crust: pizza.crust,
        toppings: pizza.toppings.join(', '),
        status: pizza.status
    });

    const submit = (e) => {
        e.preventDefault(); 
        patch(route('pizzas.update', pizza.id), { //necessario para manter a tela no local de edicao
            preserveScroll: true
        });
    }

    const statusOptions = [
        'Ordered',
        'Prepping',
        'Baking',
        'Checking',
        'Ready',
    ];

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Order Information</h2>
                <p className="mt-1 text-sm text-gray-600">
                    View e change any information associated with this order.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">

                <div>
                    <InputLabel htmlFor="size" value="Size" />

                    <TextInput
                        id="size"
                        className="mt-1 block w-full"
                        value={data.size}
                        disabled
                    />

                </div>

                <div>
                    <InputLabel htmlFor="crust" value="Crust" />

                    <TextInput
                        id="crust"
                        className="mt-1 block w-full"
                        value={data.crust}
                        disabled
                    />

                </div>

                <div>
                    <InputLabel htmlFor="toppings" value="Toppings" />

                    <TextInput
                        id="toppings"
                        className="mt-1 block w-full"
                        value={data.toppings}
                        disabled
                    />

                </div>
                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <SelectInput
                        id="status"
                        className="mt-1 block w-full text-gray-900"
                        options={statusOptions}
                        defaultValue={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                    />

                    <InputError className="mt-2" message={data.status.errors} />
                </div>
                <div className="flex items-center gap-4">

                    <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>
                    
                    <Transition
                    show={recentlySuccessful}
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leavTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    )
}