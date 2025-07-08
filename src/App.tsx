import { useState } from 'react'
import './App.css'
import { data, divisions, leagues, divisionGrades, type Divisions } from './data'

// Get the base path from the environment
const getAssetPath = (path: string) => {
  const basePath = import.meta.env.BASE_URL || '/'
  return basePath + path.replace(/^\//, '')
}

function App() {
  const [selectedDivisions, setSelectedDivisions] = useState<Divisions[]>(divisions)
  const [selectedClubs, setSelectedClubs] = useState<string[]>(data.clubs.map(club => club.name))

  const handleDivisionChange = (division: Divisions) => {
    setSelectedDivisions(prev =>
      prev.includes(division)
        ? prev.filter(d => d !== division)
        : [...prev, division]
    )
  }

  const handleGroupChange = (groupNumber: string) => {
    const groupDivisions = divisions.filter(d => d.startsWith(groupNumber))
    const allSelected = groupDivisions.every(d => selectedDivisions.includes(d))

    if (allSelected) {
      // Deselect all in group
      setSelectedDivisions(prev => prev.filter(d => !groupDivisions.includes(d)))
    } else {
      // Select all in group
      setSelectedDivisions(prev => {
        const newSelected = [...prev]
        groupDivisions.forEach(d => {
          if (!newSelected.includes(d)) {
            newSelected.push(d)
          }
        })
        return newSelected
      })
    }
  }

  const isGroupSelected = (groupNumber: string) => {
    const groupDivisions = divisions.filter(d => d.startsWith(groupNumber))
    return groupDivisions.length > 0 && groupDivisions.every(d => selectedDivisions.includes(d))
  }

  const isGroupIndeterminate = (groupNumber: string) => {
    const groupDivisions = divisions.filter(d => d.startsWith(groupNumber))
    const selectedCount = groupDivisions.filter(d => selectedDivisions.includes(d)).length
    return selectedCount > 0 && selectedCount < groupDivisions.length
  }


  const handleSelectAllDivisions = () => {
    setSelectedDivisions(divisions)
  }

  const handleSelectNoneDivisions = () => {
    setSelectedDivisions([])
  }

  const handleClubChange = (clubName: string) => {
    setSelectedClubs(prev => 
      prev.includes(clubName) 
        ? prev.filter(c => c !== clubName)
        : [...prev, clubName]
    )
  }

  const handleSelectAllClubs = () => {
    setSelectedClubs(data.clubs.map(club => club.name))
  }

  const handleSelectNoneClubs = () => {
    setSelectedClubs([])
  }

  const filteredClubs = data.clubs.filter(club => {
    const matchesDivision = selectedDivisions.length > 0 &&
      club.teams.some(team => selectedDivisions.includes(team.division))
    const matchesClub = selectedClubs.length > 0 &&
      selectedClubs.includes(club.name)
    return matchesDivision && matchesClub
  })

  return (
    <div className="app">
      <aside className="sidebar">
          <div className="filter-group">
            <div className="filter-header">
              <label>Division:</label>
              <div className="filter-controls">
                <button type="button" onClick={handleSelectAllDivisions} className="control-button">
                  All
                </button>
                <button type="button" onClick={handleSelectNoneDivisions} className="control-button">
                  None
                </button>
              </div>
            </div>
            <div className="division-list">
              {(() => {
                const sortedDivisions = divisions.sort((a, b) => {
                  if (a === 'P') return -1;
                  if (b === 'P') return 1;
                  return a.localeCompare(b, undefined, { numeric: true });
                });

                const groupedDivisions = sortedDivisions.reduce((acc, division) => {
                  const firstChar = division[0];
                  if (!acc[firstChar]) acc[firstChar] = [];
                  acc[firstChar].push(division);
                  return acc;
                }, {} as Record<string, Divisions[]>);

                return Object.entries(groupedDivisions)
                  .sort(([a], [b]) => {
                    if (a === 'P') return -1;
                    if (b === 'P') return 1;
                    return a.localeCompare(b, undefined, { numeric: true });
                  })
                  .map(([firstChar, divs]) => (
                    <div key={firstChar} className="division-group">
                      {firstChar !== 'P' && firstChar !== '1' && (
                        <label className="checkbox-item group-all">
                          <input
                            type="checkbox"
                            checked={isGroupSelected(firstChar)}
                            ref={(el) => {
                              if (el) el.indeterminate = isGroupIndeterminate(firstChar)
                            }}
                            onChange={() => handleGroupChange(firstChar)}
                            className="checkbox-input"
                          />
                          <span className="checkbox-label">{firstChar}</span>
                        </label>
                      )}
                      {divs.map(division => (
                        <label key={division} className="checkbox-item sub-option">
                          <input
                            type="checkbox"
                            checked={selectedDivisions.includes(division)}
                            onChange={() => handleDivisionChange(division)}
                            className="checkbox-input"
                          />
                          <span className="checkbox-label">{division.length > 1 ? division.slice(1) : division}</span>
                        </label>
                      ))}
                    </div>
                  ));
              })()}
            </div>
          </div>
          <div className="filter-group">
            <div className="filter-header">
              <label>Clubs:</label>
              <div className="filter-controls">
                <button type="button" onClick={handleSelectAllClubs} className="control-button">
                  All
                </button>
                <button type="button" onClick={handleSelectNoneClubs} className="control-button">
                  None
                </button>
              </div>
            </div>
            <div className="clubs-filter-list">
              {data.clubs.map((club, index) => (
                <label key={index} className="checkbox-item club-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedClubs.includes(club.name)}
                    onChange={() => handleClubChange(club.name)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-label">{club.name}</span>
                </label>
              ))}
            </div>
          </div>
      </aside>
      <main className="main-content">
        <div className="main-clubs-section">
          {filteredClubs.length === 0 ? (
            <div className="no-clubs-message">
              <p>No clubs match the current filter criteria.</p>
            </div>
          ) : (
            <div className="clubs-grid">
              <div className="grid-header">
                <div className="grid-cell header-cell"></div>
                {[...new Set(leagues)].sort((a, b) => {
                  if (a === 'P') return -1;
                  if (b === 'P') return 1;
                  return a.localeCompare(b, undefined, { numeric: true });
                }).map(league => (
                  <div key={league} className="grid-cell header-cell">{league}</div>
                ))}
              </div>
              {filteredClubs.map((club, index) => (
                <div key={index} className="grid-row">
                  <div className="grid-cell club-name-cell">
                    {club.logo ? (
                      <img 
                        src={getAssetPath(club.logo)} 
                        alt={`${club.name} logo`} 
                        className="club-logo"
                      />
                    ) : (
                      <div className="club-logo-placeholder"></div>
                    )}
                    <span className="club-name">{club.name}</span>
                  </div>
                  {[...new Set(leagues)].sort((a, b) => {
                    if (a === 'P') return -1;
                    if (b === 'P') return 1;
                    return a.localeCompare(b, undefined, { numeric: true });
                  }).map(league => {
                    const teamsInLeague = club.teams.filter(team => 
                      divisionGrades[team.division].league === league
                    );
                    return (
                      <div key={league} className="grid-cell team-cell">
                        {teamsInLeague.map((team, teamIndex) => (
                          <div key={teamIndex} className="team-item">
                            <span className="team-name">{team.name}</span>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
