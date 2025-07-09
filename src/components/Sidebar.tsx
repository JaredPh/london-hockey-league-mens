import { data, divisions, type Divisions } from '../data'
import styles from './Sidebar.module.css'

interface SidebarProps {
  sidebarOpen: boolean
  selectedDivisions: Divisions[]
  selectedClubs: string[]
  onDivisionChange: (division: Divisions) => void
  onGroupChange: (groupNumber: string) => void
  onSelectAllDivisions: () => void
  onSelectNoneDivisions: () => void
  onClubChange: (clubName: string) => void
  onSelectAllClubs: () => void
  onSelectNoneClubs: () => void
  isGroupSelected: (groupNumber: string) => boolean
  isGroupIndeterminate: (groupNumber: string) => boolean
}

const Sidebar = ({
  sidebarOpen,
  selectedDivisions,
  selectedClubs,
  onDivisionChange,
  onGroupChange,
  onSelectAllDivisions,
  onSelectNoneDivisions,
  onClubChange,
  onSelectAllClubs,
  onSelectNoneClubs,
  isGroupSelected,
  isGroupIndeterminate
}: SidebarProps) => {
  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
      <div className={styles.filterGroup}>
        <div className={styles.filterHeader}>
          <label>Division:</label>
          <div className={styles.filterControls}>
            <button type="button" onClick={onSelectAllDivisions} className={styles.controlButton}>
              All
            </button>
            <button type="button" onClick={onSelectNoneDivisions} className={styles.controlButton}>
              None
            </button>
          </div>
        </div>
        <div className={styles.divisionList}>
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
                <div key={firstChar} className={styles.divisionGroup}>
                  {firstChar !== 'P' && firstChar !== '1' && (
                    <label className={`${styles.checkboxItem} ${styles.groupAll}`}>
                      <input
                        type="checkbox"
                        checked={isGroupSelected(firstChar)}
                        ref={(el) => {
                          if (el) el.indeterminate = isGroupIndeterminate(firstChar)
                        }}
                        onChange={() => onGroupChange(firstChar)}
                        className={styles.checkboxInput}
                      />
                      <span className={styles.checkboxLabel}>{firstChar}</span>
                    </label>
                  )}
                  {divs.map(division => (
                    <label key={division} className={`${styles.checkboxItem} ${styles.subOption}`}>
                      <input
                        type="checkbox"
                        checked={selectedDivisions.includes(division)}
                        onChange={() => onDivisionChange(division)}
                        className={styles.checkboxInput}
                      />
                      <span className={styles.checkboxLabel}>{division.length > 1 ? division.slice(1) : division}</span>
                    </label>
                  ))}
                </div>
              ));
          })()}
        </div>
      </div>
      <div className={styles.filterGroup}>
        <div className={styles.filterHeader}>
          <label>Clubs:</label>
          <div className={styles.filterControls}>
            <button type="button" onClick={onSelectAllClubs} className={styles.controlButton}>
              All
            </button>
            <button type="button" onClick={onSelectNoneClubs} className={styles.controlButton}>
              None
            </button>
          </div>
        </div>
        <div className={styles.clubsFilterList}>
          {data.clubs.map((club, index) => (
            <label key={index} className={`${styles.checkboxItem} ${styles.clubCheckbox}`}>
              <input
                type="checkbox"
                checked={selectedClubs.includes(club.name)}
                onChange={() => onClubChange(club.name)}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxLabel}>{club.name}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar