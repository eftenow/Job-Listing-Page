import React, { useState } from 'react';

export const CreateListing = () => {
    const [isLanguageListOpen, setLanguageListOpen] = useState<boolean>(false);
    const [isToolListOpen, setToolListOpen] = useState<boolean>(false);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedTools, setSelectedTools] = useState<string[]>([]);

    const languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
    const tools = ["React", "Sass", "Ruby", "RoR", "Vue", "Django"];

    const toggleLanguageList = () => {
        setLanguageListOpen(!isLanguageListOpen);
    };

    const toggleToolList = () => {
        setToolListOpen(!isToolListOpen);
    };

    const handleLanguageSelect = (language: string) => {
        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter((selectedLanguage) => selectedLanguage !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
    };

    const handleToolSelect = (tool: string) => {
        if (selectedTools.includes(tool)) {
            setSelectedTools(selectedTools.filter((selectedTool) => selectedTool !== tool));
        } else {
            setSelectedTools([...selectedTools, tool]);
        }
    };

    return (
        <section className='create-section'>
            <h2 className='create-title'>Create Job Listing</h2>
            <form className='create-form'>

                <div className="create-form-group">
                    <label htmlFor="create-title-field">Position:</label>
                    <input type="text" id="create-title-field" name="create-title-field" className="create-form-control create-title-field" />
                    <p className='incorrect-title-msg incorrect-create'></p>
                </div>

                <div className="create-form-group">
                    <label htmlFor="create-options-field">Languages:</label>
                    <div className="container-option-select">
                        <div className={`select-btn-option ${isLanguageListOpen && "active"}`} onClick={toggleLanguageList}>
                            <span id='options-selected' className="btn-text-option">{selectedLanguages.length > 0 ? selectedLanguages.join(', ') : 'Select languages'}</span>
                            <span className="arrow-dwn-option">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </div>
                        <ul className={`list-items-option ${isLanguageListOpen ? 'active' : ''}`}>
                            {languages.map(language => (
                                <li key={language} className={`item-option ${selectedLanguages.includes(language) && 'checked'}`} onClick={() => handleLanguageSelect(language)}>
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className='incorrect-option-msg incorrect-create'></p>
                </div>

                <div className="create-form-group">
                    <label htmlFor="create-options-field">Tools:</label>
                    <div className="container-option-select">
                        <div className={`select-btn-option ${isToolListOpen && "active"}`} onClick={toggleToolList}>
                            <span id='options-selected' className="btn-text-option">{selectedTools.length > 0 ? selectedTools.join(', ') : "Seelct tools"}</span>
                            <span className="arrow-dwn-option">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </div>
                        <ul className={`list-items-option ${isToolListOpen ? 'active' : ''}`}>
                            {tools.map(tool => (
                                <li key={tool} className={`item-option ${selectedTools.includes(tool) && 'checked'}`} onClick={() => handleToolSelect(tool)}>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className='incorrect-option-msg incorrect-create'></p>
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </section>
    );
};
