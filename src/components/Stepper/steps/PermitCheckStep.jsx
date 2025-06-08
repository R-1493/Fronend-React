const PermitCheckStep = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Do You Need a Permit?</h2>
    <p>If skip is placed on public land, a permit is required.</p>
    <div className="flex gap-4 mt-2">
      <label>
        <input type="radio" name="permit" /> Yes
      </label>
      <label>
        <input type="radio" name="permit" /> No
      </label>
    </div>
  </div>
)
export default PermitCheckStep
