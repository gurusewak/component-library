import React from 'react';
import { PropsTableProps } from './type';

export const PropsTable: React.FC<PropsTableProps> = (props) => {
    return (
        <>
            <table className="w-full border-separate mt-3 shadow-lg mb-6">
                <thead>
                    <tr>
                        <th className="border border-gray-300 bg-gray-100 py-2 px-4">Name</th>
                        <th className="border border-gray-300 bg-gray-100 py-2 px-4">Type</th>
                        <th className="border border-gray-300 bg-gray-100 py-2 px-4">Required</th>
                        <th className="border border-gray-300 bg-gray-100 py-2 px-4">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(props).map((propName, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 py-2 px-4 font-semibold text-center">{propName.name}</td>
                            <td className="border border-gray-300 py-2 px-4 text-center">
                                <span className="border p-1 rounded-md bg-gray-50">
                                    {propName.type.name || 'None'}
                                </span>
                            </td>
                            <td className="border border-gray-300 py-2 px-4 text-center">
                                {propName.flags.isOptional ? 'No' : 'Yes'}
                            </td>
                            <td className="border border-gray-300 py-2 px-4 text-center">
                                {propName.comment?.summary?.[0]?.text || "None"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
