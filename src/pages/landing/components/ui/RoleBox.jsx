import { Box } from "@/components/ui/Box";

export const RoleBox = ({ title, description }) => {
    return (
        <Box
            title={title}
            children={
                <div className="px-5 text-center">
                    <p className="mb-15 mt-10 font-bold">{title}</p>
                    <p className="mb-15">{description}</p>
                </div>
            }
        />
    );
};
