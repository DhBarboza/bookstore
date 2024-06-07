import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Content } from "../../components/Content/Content";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";

const categoryBooks = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
];

export function Home() {
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

    console.log(selectedCategory);

    const handleSelect = useCallback(
        (textButton: string) => {
            if (selectedCategory.includes(textButton)) {
                const removeCategory = selectedCategory.filter(
                    (item) => item !== textButton
                );
                setSelectedCategory(removeCategory);
            } else {
                setSelectedCategory([...selectedCategory, textButton]);
            }
        },
        [selectedCategory]
    );

    return (
        <>
            <Header />
            <Content>
                <Title text="What do you want to read today?" />
                <div className="gap-8 grid grid-cols-8 my-6">
                    {categoryBooks.map((book) => (
                        <Button
                            label={book}
                            variant={
                                selectedCategory.includes(book)
                                    ? "trueSelected"
                                    : "falseSelected"
                            }
                            onClick={() => handleSelect(book)}
                        />
                    ))}
                </div>
                <div className="pt-7">
                    <p className="text-blue-dark font-semibold text-2xl">
                        What would you like to receive a book recommendation
                        about?
                    </p>
                    <input
                        type="text"
                        placeholder="I would like to read..."
                        className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3"
                    />
                </div>
            </Content>
        </>
    );
}
