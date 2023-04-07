import Button from "@/components/Button";
import Image from "next/image";

export default function LogoutButton({ className }) {

    return (
        <>
            <Button
                type="button"
                className={["!p-0", className].join(' ')}
            >
                <div className="flex items-center justify-between gap-6 px-2 py-1 border rounded-full border-[#E3E8F2] text-primary-black">
                    <Image
                        src="/dummy_avatar.png"
                        alt="photo-profile"
                        quality={60}
                        width={32}
                        height={32}
                        className="object-cover rounded-full min-w-8 max-h-8"
                    />
                    <span className="capitalize select-none text-primary-black font-work-sans">{'Jessica' ?? ''}</span>
                    <svg className="rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="#000000" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 15.375L12 8.625L18.75 15.375" />
                    </svg>
                </div>
            </Button>
        </>
    )
}