import React from 'react'

const MoodSelector = () => {
    const mood = 'Happy';

    return(
        <div className='ClassSelector'>
                <form>
                    <label htmlFor='mood'>
                        mood
                        <input id='mood' value={mood} placeholder='Mood' />
                    </label>
                    <button>Submit</button>
                </form>
        </div>
    )
}

export default MoodSelector;