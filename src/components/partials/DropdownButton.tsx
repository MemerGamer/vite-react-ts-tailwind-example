const DropdownButton: React.FC<{
    onClick: () => void;
    children: React.ReactNode;
}> = ({ onClick, children }) => {
    return (
        <button
            type="button"
            className="block w-full text-left px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-600 hover:text-white dark:text-white"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default DropdownButton;