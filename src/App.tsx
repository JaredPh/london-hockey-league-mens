import { useState, useEffect } from 'react'
import './App.css'
import styles from './App.module.css'
import { data, divisions, type Divisions } from './data'
import FilterIcon from './components/FilterIcon'
import CloseIcon from './components/CloseIcon'
import Sidebar from './components/Sidebar'
import ClubsGrid from './components/ClubsGrid'
import ScreenSizeMask from './components/ScreenSizeMask'
import ScreenSizeBanner from './components/ScreenSizeBanner'

// Get the base path from the environment
const getAssetPath = (path: string) => {
  const basePath = import.meta.env.BASE_URL || '/'
  return basePath + path.replace(/^\//, '')
}

function App() {
  const [selectedDivisions, setSelectedDivisions] = useState<Divisions[]>(() => {
    const saved = localStorage.getItem('selectedDivisions')
    return saved ? JSON.parse(saved) : divisions
  })
  const [selectedClubs, setSelectedClubs] = useState<string[]>(() => {
    const saved = localStorage.getItem('selectedClubs')
    return saved ? JSON.parse(saved) : data.clubs.map(club => club.name)
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('selectedDivisions', JSON.stringify(selectedDivisions))
  }, [selectedDivisions])

  useEffect(() => {
    localStorage.setItem('selectedClubs', JSON.stringify(selectedClubs))
  }, [selectedClubs])

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
    <div className={styles.app}>
      <ScreenSizeMask />
      <ScreenSizeBanner />
      <button className={styles.mobileMenuToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <CloseIcon /> : <FilterIcon />}
      </button>
      <Sidebar
        sidebarOpen={sidebarOpen}
        selectedDivisions={selectedDivisions}
        selectedClubs={selectedClubs}
        onDivisionChange={handleDivisionChange}
        onGroupChange={handleGroupChange}
        onSelectAllDivisions={handleSelectAllDivisions}
        onSelectNoneDivisions={handleSelectNoneDivisions}
        onClubChange={handleClubChange}
        onSelectAllClubs={handleSelectAllClubs}
        onSelectNoneClubs={handleSelectNoneClubs}
        isGroupSelected={isGroupSelected}
        isGroupIndeterminate={isGroupIndeterminate}
      />
      <main className={styles.mainContent}>
        <div className={styles.mainClubsSection}>
          <ClubsGrid 
            filteredClubs={filteredClubs} 
            getAssetPath={getAssetPath}
          />
        </div>
      </main>
    </div>
  )
}

export default App
