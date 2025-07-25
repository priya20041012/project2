import React from 'react'

const Table = () => {
  return (
<div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
	<h2 className="mb-3 text-2xl font-semibold leading-tight">Standings</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<thead className="rounded-t-lg dark:bg-gray-300">
				<tr className="text-right">
					<th title="Ranking" className="p-3 text-left">#</th>
					<th title="Team name" className="p-3 text-left">Team</th>
					<th title="Wins" className="p-3">W</th>
					<th title="Losses" className="p-3">L</th>
					<th title="Win percentage" className="p-3">Win%</th>
					<th title="Games behind" className="p-3">GB</th>
					<th title="Home games" className="p-3">Home</th>
					<th title="Away games" className="p-3">Away</th>
					<th title="Last 10 games" className="p-3">L10</th>
					<th title="Current streak" className="p-3">Streak</th>
				</tr>
			</thead>
			<tbody>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>1</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>MIA</span>
					</td>
					<td className="px-3 py-2">
						<span>31</span>
					</td>
					<td className="px-3 py-2">
						<span>17</span>
					</td>
					<td className="px-3 py-2">
						<span>.646</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>0</span>
					</td>
					<td className="px-3 py-2">
						<span>17-5</span>
					</td>
					<td className="px-3 py-2">
						<span>14-12</span>
					</td>
					<td className="px-3 py-2">
						<span>8-2</span>
					</td>
					<td className="px-3 py-2">
						<span>W2</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>2</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>CHI</span>
					</td>
					<td className="px-3 py-2">
						<span>30</span>
					</td>
					<td className="px-3 py-2">
						<span>17</span>
					</td>
					<td className="px-3 py-2">
						<span>.638</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>0.5</span>
					</td>
					<td className="px-3 py-2">
						<span>17-6</span>
					</td>
					<td className="px-3 py-2">
						<span>13-11</span>
					</td>
					<td className="px-3 py-2">
						<span>4-6</span>
					</td>
					<td className="px-3 py-2">
						<span>W2</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>3</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>CLE</span>
					</td>
					<td className="px-3 py-2">
						<span>30</span>
					</td>
					<td className="px-3 py-2">
						<span>19</span>
					</td>
					<td className="px-3 py-2">
						<span>.612</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>1.5</span>
					</td>
					<td className="px-3 py-2">
						<span>15-9</span>
					</td>
					<td className="px-3 py-2">
						<span>15-10</span>
					</td>
					<td className="px-3 py-2">
						<span>7-3</span>
					</td>
					<td className="px-3 py-2">
						<span>W3</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>4</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>BKN</span>
					</td>
					<td className="px-3 py-2">
						<span>29</span>
					</td>
					<td className="px-3 py-2">
						<span>19</span>
					</td>
					<td className="px-3 py-2">
						<span>.604</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>2</span>
					</td>
					<td className="px-3 py-2">
						<span>12-13</span>
					</td>
					<td className="px-3 py-2">
						<span>17-6</span>
					</td>
					<td className="px-3 py-2">
						<span>4-6</span>
					</td>
					<td className="px-3 py-2">
						<span>L3</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>5</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>MIL</span>
					</td>
					<td className="px-3 py-2">
						<span>30</span>
					</td>
					<td className="px-3 py-2">
						<span>20</span>
					</td>
					<td className="px-3 py-2">
						<span>.600</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>2</span>
					</td>
					<td className="px-3 py-2">
						<span>17-8</span>
					</td>
					<td className="px-3 py-2">
						<span>13-12</span>
					</td>
					<td className="px-3 py-2">
						<span>5-5</span>
					</td>
					<td className="px-3 py-2">
						<span>L1</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>6</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>PHI</span>
					</td>
					<td className="px-3 py-2">
						<span>28</span>
					</td>
					<td className="px-3 py-2">
						<span>19</span>
					</td>
					<td className="px-3 py-2">
						<span>.596</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>2.5</span>
					</td>
					<td className="px-3 py-2">
						<span>11-10</span>
					</td>
					<td className="px-3 py-2">
						<span>17-9</span>
					</td>
					<td className="px-3 py-2">
						<span>7-3</span>
					</td>
					<td className="px-3 py-2">
						<span>W2</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>7</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>CHA</span>
					</td>
					<td className="px-3 py-2">
						<span>27</span>
					</td>
					<td className="px-3 py-2">
						<span>22</span>
					</td>
					<td className="px-3 py-2">
						<span>.551</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>4.5</span>
					</td>
					<td className="px-3 py-2">
						<span>13-7</span>
					</td>
					<td className="px-3 py-2">
						<span>14-15</span>
					</td>
					<td className="px-3 py-2">
						<span>7-3</span>
					</td>
					<td className="px-3 py-2">
						<span>W1</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>8</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>BOS</span>
					</td>
					<td className="px-3 py-2">
						<span>25</span>
					</td>
					<td className="px-3 py-2">
						<span>24</span>
					</td>
					<td className="px-3 py-2">
						<span>.510</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>6.5</span>
					</td>
					<td className="px-3 py-2">
						<span>16-10</span>
					</td>
					<td className="px-3 py-2">
						<span>9-14</span>
					</td>
					<td className="px-3 py-2">
						<span>7-3</span>
					</td>
					<td className="px-3 py-2">
						<span>W2</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>9</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>TOW</span>
					</td>
					<td className="px-3 py-2">
						<span>23</span>
					</td>
					<td className="px-3 py-2">
						<span>23</span>
					</td>
					<td className="px-3 py-2">
						<span>.500</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>7</span>
					</td>
					<td className="px-3 py-2">
						<span>13-12</span>
					</td>
					<td className="px-3 py-2">
						<span>10-11</span>
					</td>
					<td className="px-3 py-2">
						<span>4-6</span>
					</td>
					<td className="px-3 py-2">
						<span>L1</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>10</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>WAS</span>
					</td>
					<td className="px-3 py-2">
						<span>23</span>
					</td>
					<td className="px-3 py-2">
						<span>25</span>
					</td>
					<td className="px-3 py-2">
						<span>.479</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>8</span>
					</td>
					<td className="px-3 py-2">
						<span>13-12</span>
					</td>
					<td className="px-3 py-2">
						<span>10-12</span>
					</td>
					<td className="px-3 py-2">
						<span>4-6</span>
					</td>
					<td className="px-3 py-2">
						<span>L4</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>11</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>NYK</span>
					</td>
					<td className="px-3 py-2">
						<span>23</span>
					</td>
					<td className="px-3 py-2">
						<span>26</span>
					</td>
					<td className="px-3 py-2">
						<span>.469</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>8.5</span>
					</td>
					<td className="px-3 py-2">
						<span>12-14</span>
					</td>
					<td className="px-3 py-2">
						<span>11-12</span>
					</td>
					<td className="px-3 py-2">
						<span>4-6</span>
					</td>
					<td className="px-3 py-2">
						<span>L2</span>
					</td>
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
					<td className="px-3 py-2 text-left">
						<span>12</span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>ATL</span>
					</td>
					<td className="px-3 py-2">
						<span>22</span>
					</td>
					<td className="px-3 py-2">
						<span>25</span>
					</td>
					<td className="px-3 py-2">
						<span>.468</span>
					</td>
					<td className="px-3 py-2 text-right">
						<span>8.5</span>
					</td>
					<td className="px-3 py-2">
						<span>12-11</span>
					</td>
					<td className="px-3 py-2">
						<span>10-14</span>
					</td>
					<td className="px-3 py-2">
						<span>5-5</span>
					</td>
					<td className="px-3 py-2">
						<span>W5</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>  )
}

export default Table