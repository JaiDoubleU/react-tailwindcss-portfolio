import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { decode } from 'html-entities';
const address = "&#57;&#51;&#32;&#83;&#111;&#109;&#109;&#101;&#32;&#66;&#111;&#117;&#108;&#101;&#118;&#97;&#114;&#100;&#32;&#83;&#87;&#44;&#32;&#67;&#97;&#108;&#103;&#97;&#114;&#121;&#44;&#32;&#67;&#97;&#110;&#97;&#100;&#97;";
const phone = "&#52;&#48;&#51;&#32;&#57;&#50;&#50;&#32;&#54;&#51;&#54;&#49;"
const email  = "&#106;&#119;&#115;&#104;&#097;&#110;&#110;&#111;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"

const contacts = [
	{
		id: 1,
		name: address,
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name:email,
		icon: <FiMail />,
	},
	{
		id: 3,
		name: phone,
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				
				{/* <h2 className="pb-5 sm:pb-10font-general-medium text-2xl sm:text-4xl text-zinc-700 dark:text-zinc-300">
					Contact Details
				</h2> */}
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl light:text-zinc-700 dark:text-zinc-200 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 light:text-zinc-700 dark:text-zinc-200">
								<div> 
									{decode(contact.name)}
								</div>								         
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
