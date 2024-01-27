"use client"
import React ,{useState} from 'react'
import PetCard from './PetCard';
import DialogBox from '@/components/Common/DialogBox';
import ProfileForm from './ProfileForm';

const UserPofile = () => {
    const gridData = [1, 2, 3, 4, 5];
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <div className='w-full pt-[101px]'>
            {/* ProfileBox */}
            <div className='w-full flex justify-between '>
                {/* Avatr Box */}
                <div onClick={openPopup} className='hover:cursor-pointer'>
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&"
                        className="aspect-square object-contain object-center w-full max-w-[160px] rounded-full"
                    />
                </div>
                <DialogBox isOpen={isOpen} onClosePopup={closePopup}>
                    <ProfileForm />
                </DialogBox>
                {/* Profile details bOx */}
                <div className='w-[82%] grid grid-cols-4 gap-2'>
                    <div  >
                        <div className="text-slate-700 text-2xl  h-10 italic font-semibold grow shrink basis-auto">
                            Rahul Shah
                        </div>
                        <div className="text-slate-500 text-sm leading-9 tracking-normal mt-5">
                            Contact No
                        </div>
                        <div className="text-slate-700 text-lg font-semibold leading-8 tracking-normal ">
                            0937948568
                        </div>
                    </div>
                    <div  >
                        <div className="text-slate-700 text-2xl h-10 italic font-semibold grow shrink basis-auto">

                        </div>
                        <div className="text-slate-500 text-sm leading-9 tracking-normal mt-5">
                            Emai Id
                        </div>
                        <div className="text-slate-700 text-lg font-semibold leading-8 tracking-normal ">
                            johin@gmail.com
                        </div>
                    </div>
                    <div  >
                        <div className="text-slate-700 text-2xl h-10 italic font-semibold grow shrink basis-auto">

                        </div>
                        <div className="text-slate-500 text-sm leading-9 tracking-normal mt-5">
                            Address
                        </div>
                        <div className="text-slate-700 text-lg font-semibold leading-8 tracking-normal ">
                            Andheri West,Mumbai
                        </div>
                    </div>
                    <div  >
                        <div className="text-slate-700 text-2xl h-10 italic font-semibold grow shrink basis-auto">
                            <button className="justify-center items-stretch w-[166px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-8 py-4 rounded-[86px] border-2 border-solid">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4de235d9b77455aa5f7570010e4b94c0b4e21c41aa50f4e54f6bc6467e5db216?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                    className="aspect-[1.08] object-contain object-center w-[15px] shrink-0 my-auto"
                                />
                                <div className="text-slate-500 text-base font-bold leading-5 tracking-normal grow whitespace-nowrap">
                                    Edit Profile
                                </div>
                            </button>
                        </div>
                        <div className="text-slate-500  text-sm leading-9 tracking-normal mt-4">
                        </div>
                        <div className="text-slate-700   text-lg font-semibold leading-4 tracking-normal ">
                        </div>
                    </div>
                </div>

            </div>
            {/* Pets Box */}
            <div  className='w-full  mt-[101px]'>
                <div className='w-full flex justify-between items-center'>
                    <div className="text-slate-700 text-xl  h-10 italic font-semibold grow shrink basis-auto">
                        Rahul Shah
                    </div>
                    <button className="justify-center items-stretch mr-10 w-[166px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-8 py-4 rounded-[86px] border-2 border-solid">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7459928d5deca413d471b59d8960796b02135ac42842000779accc1910cdd2bd?apiKey=22a36eade5734692978208fb0d2f5c62&"
                            className="aspect-[1.08] object-contain object-center w-[15px] shrink-0 my-auto"
                        />
                        <div className="text-slate-500 text-base font-bold leading-5 tracking-normal grow whitespace-nowrap">
                            Add Pet
                        </div>
                    </button>
                </div>
                {/* Pet grid Box */}
                <div className='w-full grid grid-cols-5 gap-3 mt-4'>
                    {
                        gridData.map((item, inded) => (
                            <PetCard />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default UserPofile