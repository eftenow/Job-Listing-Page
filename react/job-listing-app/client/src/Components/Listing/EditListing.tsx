import React, { useState, useEffect } from 'react';
import { SelectionListStates, SelectedItems, CreateListingProps, ListingItemIf } from './listingInterfaces';
import { useNavigate, useParams } from 'react-router-dom';

const languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
const tools = ["React", "Sass", "Ruby", "RoR", "Vue", "Django"];
const roles = ["Frontend", "Backend", "Fullstack"];
const levels = ["Intern", "Junior", "Midweight", "Senior"];
const contracts = ["Full Time", "Part Time", "Contract"];

export const EditListing: React.FC<CreateListingProps> = ({ listingStore }) => {
    const [listStates, setListStates] = useState<SelectionListStates>({
        isLanguageListOpen: false,
        isToolListOpen: false,
        isRoleListOpen: false,
        isLevelListOpen: false,
        isContractListOpen: false,
    });

    const [selectedItems, setSelectedItems] = useState<SelectedItems>({
        selectedLanguages: [],
        selectedTools: [],
        selectedRole: null,
        selectedLevel: null,
        selectedContract: null,
    });
    const navigate = useNavigate();
    const params = useParams();
    const { listingId } = params;
    const currentListing: ListingItemIf = listingStore.getListing(Number(listingId));

    useEffect(() => {
        setSelectedItems(
            {
                selectedLanguages: currentListing.languages,
                selectedTools: currentListing.tools,
                selectedRole: currentListing.role,
                selectedLevel: currentListing.level,
                selectedContract: currentListing.contract
            }
        )
    }, [currentListing])


    const onSubmitEdit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget;
        const position = (form.querySelector('#position') as HTMLInputElement)?.value;
        const location = (form.querySelector('#location') as HTMLInputElement)?.value;
        const level = form.querySelector('#level')?.textContent;
        const role = form.querySelector('#role')?.textContent;
        const contract = form.querySelector('#contract')?.textContent;
        const languages = form.querySelector('#languages')?.textContent?.split(', ') || [];
        const tools = form.querySelector('#tools')?.textContent?.split(', ') || [];

        const listingData = { position, location, level, role, contract, languages, tools };
        console.log(listingData);

        listingStore.editListing(Number(listingId), listingData as Partial<ListingItemIf>);
        navigate('/');
    }



    const toggleList = (listName: keyof SelectionListStates) => {
        setListStates((prevStates) => ({
            ...prevStates,
            [listName]: !prevStates[listName],
        }));
    };

    const handleSingleSelect = (listName: keyof SelectedItems, item: string) => {
        setSelectedItems((prevItems) => ({
            ...prevItems,
            [listName]: item === prevItems[listName] ? null : item,
        }));
    };

    const handleMultipleSelect = (listName: keyof SelectedItems, item: string) => {
        setSelectedItems((prevItems) => {
          const currentSelection = prevItems[listName] || [];
      
          const isItemSelected = Array.isArray(currentSelection) && currentSelection.includes(item);
      
          const updatedSelection = isItemSelected
            ? currentSelection.filter((selectedItem) => selectedItem !== item)
            : [...(currentSelection as string[]), item];
      
          return {
            ...prevItems,
            [listName]: updatedSelection,
          };
        });
      };
      

    return (
        <section className='create-section'>
            <h2 className='create-title'>Edit Job Listing</h2>
            <form className='create-form' onSubmit={(e) => onSubmitEdit(e)}>

                <div className="create-form-group">
                    <label className='create-label' htmlFor="position">Position:</label>
                    <input type="text" name="position" id="position" className="create-input" defaultValue={currentListing.position} />
                    <p className='incorrect-title-msg incorrect-create'></p>
                </div>

                <div className="create-form-group">
                    <label className='create-label' htmlFor="location">Location:</label>
                    <input type="text" name="location" id="location" className="create-input" defaultValue={currentListing.location} />
                    <p className='incorrect-title-msg incorrect-create'></p>
                </div>

                <div className="create-form-group">
                    <label className="create-label" htmlFor="languages">
                        Languages:
                    </label>
                    <div className="container-option-select">
                        <div
                            className={`select-btn-option ${listStates.isLanguageListOpen && 'active'}`}
                            onClick={() => toggleList('isLanguageListOpen')}
                        >
                            <span className="btn-text-option" >
                                {selectedItems.selectedLanguages.length > 0
                                    ? <span id='languages'>{selectedItems.selectedLanguages.join(', ')}</span>
                                    : <span className='select-text'>Select languages</span>}
                            </span>
                            <span className="arrow-dwn-option">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </div>
                        <ul className={`list-items-option ${listStates.isLanguageListOpen ? 'active' : ''}`}>
                            {languages.map((language) => (
                                <li
                                    key={language}
                                    className={`item-option ${selectedItems.selectedLanguages.includes(language) && 'checked'}`}
                                    onClick={() => handleMultipleSelect('selectedLanguages', language)}
                                >
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className='incorrect-option-msg incorrect-create'></p>
                </div>

                <div className="create-form-group">
                    <label className='create-label' htmlFor="create-options-field">Tools:</label>
                    <div className="container-option-select">
                        <div
                            className={`select-btn-option ${listStates.isToolListOpen && "active"}`}
                            onClick={() => toggleList('isToolListOpen')}
                        >
                            <span className="btn-text-option">
                                {selectedItems.selectedTools.length > 0
                                    ? <span id='tools'>{selectedItems.selectedTools.join(', ')}</span>
                                    : <span className='select-text'>Select tools</span>}
                            </span>
                            <span className="arrow-dwn-option">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </div>
                        <ul className={`list-items-option ${listStates.isToolListOpen ? 'active' : ''}`}>
                            {tools.map(tool => (
                                <li
                                    key={tool}
                                    className={`item-option ${selectedItems.selectedTools.includes(tool) && 'checked'}`}
                                    onClick={() => handleMultipleSelect('selectedTools', tool)}
                                >
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className='incorrect-option-msg incorrect-create'></p>
                </div>


                <div className="create-form-group">
                    <label className="create-label" htmlFor="role">Role:</label>
                    <div className="container-option-select">
                        <div
                            className={`select-btn-option ${listStates.isRoleListOpen && "active"}`}
                            onClick={() => toggleList('isRoleListOpen')}
                        >
                            <span className="btn-text-option" id='role'>
                                {selectedItems.selectedRole ? selectedItems.selectedRole : <span className='select-text'>Select role</span>}
                            </span>
                            <span className="arrow-dwn-option">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </div>
                        <ul className={`list-items-option ${listStates.isRoleListOpen ? 'active' : ''}`}>
                            {roles.map(role => (
                                <li
                                    key={role}
                                    className={`item-option ${role === selectedItems.selectedRole && 'checked'}`}
                                    onClick={() => handleSingleSelect('selectedRole', role)}
                                >
                                    {role}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="create-form-group">
                    <label className="create-label" htmlFor="level">Level:</label>
                    <div className="container-option-select">
                        <div
                            className={`select-btn-option ${listStates.isLevelListOpen && "active"}`}
                            onClick={() => toggleList('isLevelListOpen')}
                        >
                            <span className="btn-text-option" id='level'>
                                {selectedItems.selectedLevel ? selectedItems.selectedLevel : <span className='select-text'>Select level</span>}
                            </span>
                            <span className="arrow-dwn-option">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </div>
                        <ul className={`list-items-option ${listStates.isLevelListOpen ? 'active' : ''}`}>
                            {levels.map(level => (
                                <li
                                    key={level}
                                    className={`item-option ${level === selectedItems.selectedLevel && 'checked'}`}
                                    onClick={() => handleSingleSelect('selectedLevel', level)}
                                >
                                    {level}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>



                <div className="create-form-group">
                    <label className="create-label" htmlFor="contract">Employment:</label>
                    <div className="container-option-select">
                        <div
                            className={`select-btn-option ${listStates.isContractListOpen && "active"}`}
                            onClick={() => toggleList("isContractListOpen")}
                        >
                            <span className="btn-text-option" id='contract'>
                                {selectedItems.selectedContract ? selectedItems.selectedContract : <span className='select-text'>Select employment</span>}
                            </span>
                            <span className="arrow-dwn-option">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </div>
                        <ul className={`list-items-option ${listStates.isContractListOpen ? 'active' : ''}`}>
                            {contracts.map(contract => (
                                <li
                                    key={contract}
                                    className={`item-option ${contract === selectedItems.selectedContract && 'checked'}`}
                                    onClick={() => handleSingleSelect('selectedContract', contract)}
                                >
                                    {contract}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <button type="submit" className="create-button">Edit</button>
            </form>
        </section>
    );
};