/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/JyNfxKX5Cbz
 */
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"

export function dropdown() {
  return (
    (<div
      className="min-h-screen bg-white text-gray-900 flex justify-center items-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Create your own "Echo"</h1>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="text-input">
              Enter Text:
            </label>
            <Textarea
              className="bg-gray-100 text-gray-900 w-full h-40 p-4 rounded border border-gray-200 border-gray-300 focus:border-blue-500 dark:border-gray-800"
              id="text-input"
              placeholder="Type your message here." />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm">Characters remaining: 2500</span>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Generate Speech
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Model ID" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="model1">Model 1</SelectItem>
                  <SelectItem value="model2">Model 2</SelectItem>
                  <SelectItem value="model3">Model 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Voice ID" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="voice1">Voice 1</SelectItem>
                  <SelectItem value="voice2">Voice 2</SelectItem>
                  <SelectItem value="voice3">Voice 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>)
  );
}
