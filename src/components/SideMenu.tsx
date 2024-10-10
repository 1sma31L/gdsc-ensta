/* eslint-disable @next/next/no-img-element */
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import NavItems from "@/data/NavItems";

export default function SheetDemo() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<HiOutlineMenuAlt3 className="text-2xl" />
			</SheetTrigger>
			<SheetContent className="font-unbounded">
				<div className="mt-2">
					<div className="flex gap-2 justify-start items-center">
						<img src="gdsc.svg" alt="" className="dark:invert w-8" />
						<h1>GDSC ENSTA</h1>
					</div>
					<div className="flex flex-col gap-4 py-5">
						{NavItems.map((item, index) => (
							<Link href={item.href} key={index}>
								<SheetClose>
									<div className="flex justify-start items-center gap-2">
										<span className="text-2xl">{item.icon}</span>{" "}
										<span className="text-2xl">{item.title}</span>{" "}
									</div>
								</SheetClose>
							</Link>
						))}
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
